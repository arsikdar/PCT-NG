import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  @Input() value: number;

  count = 0;

  @Output() onAction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increment(e) {
    this.count += 1
    this.onAction.emit({ value: this.value * this.count });
  }

}
