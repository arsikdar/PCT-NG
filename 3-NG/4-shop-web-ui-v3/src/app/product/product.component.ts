import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product;
  @Input() cart;
  @Output() buy = new EventEmitter();
  
  cartQty = 0;
  currentTab = 1;
  reviews = []

  constructor() { }

  ngOnInit() {
  }
  ngDoCheck() {
    this.cartQty = this.cart[this.product.id] ? this.cart[this.product.id].qty : 0;
  }
  changeTab(tabIndex, event) {
    event.preventDefault();
    this.currentTab = tabIndex;
    if (this.currentTab === 3) {
      let appiUrl = `http://0.0.0.0:8080/api/products/${this.product.id}/reviews`;
      fetch(appiUrl)
        .then(response => response.json())
        .then(reviews => {
          this.reviews = reviews;
        })
    } 
  }
  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex;
  }
  handleBuy(e) {
    this.buy.emit({ item: this.product })
  }

}
