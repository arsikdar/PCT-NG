import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product;
  currentTab = 1;
  reviews = [
    { stars: 5, author: 'NAG@EMAIL.COM', body: 'sample-review-1' },
    { stars: 3, author: 'INDU@EMAIL.COM', body: 'sample-review-2' }
  ]

  constructor() { }

  ngOnInit() {
  }
  changeTab(tabIndex, event) {
    event.preventDefault();
    this.currentTab = tabIndex;
  }
  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex;
  }

}
