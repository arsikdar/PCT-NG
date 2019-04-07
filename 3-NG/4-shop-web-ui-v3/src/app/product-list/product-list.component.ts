import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() cart;
  @Output() buy = new EventEmitter();

  products = []

  constructor() { }
 
  ngOnInit() {
    let appiUrl = "http://0.0.0.0:8080/api/products";
    let promise = fetch(appiUrl);
    promise
      .then(response => response.json())
      .then(products => {
        this.products = products;
      })
  }

  handleBuy(e) {
    this.buy.emit(e)
  }

}
