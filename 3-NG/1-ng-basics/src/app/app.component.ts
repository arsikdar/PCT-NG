import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <hr/>
      <h1>{{title}}</h1> by : <span>{{trainer}}</span> 
      <hr/>
      <app-action-box></app-action-box>
      <hr/>
        <button (click)="changeMessage($event,'good morning')" class="btn btn-primary">GM</button>&nbsp;
        <button (click)="changeMessage($event,'good noon')" class="btn btn-primary">GN</button>&nbsp;
        <button (click)="changeMessage($event,'good evening')" class="btn btn-primary">GE</button>&nbsp;
        <button (click)="changeMessage($event,'')" class="btn btn-danger">remove-greeting</button>&nbsp;
      <hr/>
      <app-greeting *ngIf="message" [message]="message" [time]="time"></app-greeting>
    </div>
  `
})
export class AppComponent {

  title: string = "ng basics";
  trainer: string = "Nag"

  message: string;
  time: string;

  menu: Array<string> = [];

  constructor() {
    //console.log('AppComponent :: constructor()')
    this.message = "greetings";
    this.time = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' });
  }

  changeMessage(e, message) {
    this.message = message;
    this.time = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' });
  }

}
