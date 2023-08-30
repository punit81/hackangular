import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Project-Demo';
  showPrompt: boolean = false;
  userInput: string = '';
  
  togglePrompt() {
    this.showPrompt = !this.showPrompt;
  }

  submit() {
    // Your logic for handling the submitted value
    console.log('Submitted:', this.userInput);

    // Hide the prompt
    this.togglePrompt();
  }
}
