import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatComponent } from '../chat/chat.component';
import { SharedDataService } from '../shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  chartData: any;
  newMessage: string = '';
  private chartDataSubscription: Subscription | undefined;
  constructor(private http: HttpClient,private sharedDataService:SharedDataService) {}

 
  ngOnInit() {
    this.chartDataSubscription = this.sharedDataService.getChartDataObservable().subscribe(data => {
      this.chartData = data;
    });
  }
   
  ngOnDestroy() {     if (this.chartDataSubscription) {       this.chartDataSubscription.unsubscribe();     }   }

  
}
