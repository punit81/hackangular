import { Component,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { SharedDataService } from '../shared-data.service';
import { BarChartComponent } from '../bar-chart/bar-chart.component';


interface Message {
  content: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: Message[] = [];
  newMessage: string = '';

  constructor(private http: HttpClient,private sharedDataService:SharedDataService) {} // Inject the HttpClient

  sendMessage() {
    if (this.newMessage.trim() === '') {
      return;
    }

    this.messages.push({ content: this.newMessage, sender: 'user' });

    // Simulate a bot response (replace with actual bot logic)
    this.http.post<any>('http://127.0.0.1:5000/send_message', { message: this.newMessage }).subscribe(response => {
      this.messages.push({ content: response.message, sender: 'bot' });
    });

    this.sharedDataService.setNewMessage(this.newMessage);
    this.sharedDataService.fetchChartData();
    this.sharedDataService.loadData();
    
  }
}
