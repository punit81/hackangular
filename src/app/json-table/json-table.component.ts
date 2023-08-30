import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../interfaces/api-response.interface'; 
import { ResponseItem } from '../interfaces/api-response.interface';// Adjust the path

 

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.css']
})
export class JsonTableComponent implements OnInit {
  jsonData: ResponseItem[] = [];

 

  constructor(private http: HttpClient) {}

 

  ngOnInit() {
    this.loadData();
  }

 

  loadData() {
    const apiUrl = 'http://localhost:5000/get_json_data';
    this.http.get<ApiResponse>(apiUrl).subscribe(data => {
      this.jsonData = data.response;
      let arr:any = this.jsonData[0].row;
      console.log(arr);
    });
  }
}