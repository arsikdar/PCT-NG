import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      id: 111,
      name: 'Laptop',
      price: 198000,
      canBuy: true,
      image: 'assets/Laptop.png',
      description: 'New Mac pro'
    },
    {
      id: 222,
      name: 'Mobile',
      price: 18000,
      canBuy: true,
      image: 'assets/Mobile.png',
      description: 'New  pro'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
