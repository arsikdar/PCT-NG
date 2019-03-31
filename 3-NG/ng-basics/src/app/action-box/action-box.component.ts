import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-box',
  templateUrl: './action-box.component.html',
  styleUrls: ['./action-box.component.css']
})
export class ActionBoxComponent implements OnInit {

  totalCount = 0;

  numbers: Array<number> = []

  constructor() {
    this.numbers = [10, -10, 20, -20, -30, 30]
  }

  ngOnInit() {
  }

  incrementTotalCount(e) {
    this.totalCount += e.value;
  }

}
