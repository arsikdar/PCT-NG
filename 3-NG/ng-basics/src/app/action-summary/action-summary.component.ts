import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-summary',
  templateUrl: './action-summary.component.html',
  styleUrls: ['./action-summary.component.css']
})
export class ActionSummaryComponent implements OnInit {

  @Input() value = 0;

  constructor() { }

  ngOnInit() {
  }

}
