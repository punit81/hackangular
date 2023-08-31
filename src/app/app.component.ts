import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Project-Demo';
  showPrompt: boolean = false;
  userInput: string = '';
  constructor(private http: HttpClient) {}

  togglePrompt() {
    this.showPrompt = !this.showPrompt;
  }

  submit() {
    // Your logic for handling the submitted value
    

    // Hide the prompt
    this.togglePrompt();
  }
}