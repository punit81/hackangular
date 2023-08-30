import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chartData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchChartData();
  }

  fetchChartData() {
    this.http.get<any>('http://localhost:5000/get_chart_json_data').subscribe(response => {
      this.chartData = {
        labels: response.labels,
        datasets: [
          {
            label: 'Chart Data',
            data: response.data,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1
          }
        ]
      };
    });
  }
}
