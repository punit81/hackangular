import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../interfaces/api-response.interface'; 
import { ResponseItem } from '../interfaces/api-response.interface';// Adjust the path
import { SharedDataService } from '../shared-data.service';
import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.css']
})
export class JsonTableComponent implements OnInit {
  jsonData: ResponseItem[] = [];
  private tableDataSubscription: Subscription | undefined;
  tableData: any;

  constructor(private http: HttpClient,public sharedDataService:SharedDataService) {}

 

  ngOnInit() {
    this.tableDataSubscription = this.sharedDataService.getChartDataObservable().subscribe(data => {
      this.tableData = data;
      this.jsonData = this.tableData;
    });
  }
   
  ngOnDestroy() {     if (this.tableDataSubscription) {       this.tableDataSubscription.unsubscribe();     }   }
}