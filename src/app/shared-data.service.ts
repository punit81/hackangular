// shared-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ApiResponse } from './interfaces/api-response.interface';
import { ResponseItem } from './interfaces/api-response.interface';
 

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private newMessage: string = '';
  private _chartData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private _tableData:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  jsonData: ResponseItem[] = [];
  public listOfObjects:any[]=[];
  constructor(private http: HttpClient) {}
 
  setNewMessage(message: string) {
    this.newMessage = message;
  }

  getNewMessage() {
    return this.newMessage;
  }

  fetchChartData() {
    this.http.post<any>('http://localhost:5001/hack', { message: this.newMessage }).subscribe(response => {
      const chartData = {
        labels: response.labels,
        datasets: [
          {
            label: 'Chart Data',
            data: response.data,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      };
      this._chartData.next(chartData); // Update the BehaviorSubject
    });
  }

  loadData() {
    this.http.post<any>('http://localhost:5002/hack', { message: this.newMessage }).subscribe(data => {
       const tableData = data.response;
      console.log("Data is"+tableData);
      for(const rowItems of tableData){
        for(const rowItem of rowItems.row){
           this.listOfObjects.push(rowItem);
        }

      }
      this._tableData.next(tableData);
    });
  }

  getChartDataObservable() {
    return this._chartData.asObservable();
  }

  getTableDataObservable(){
    return this._tableData.asObservable();
  }
}