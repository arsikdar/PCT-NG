import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any = []

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data // observable stream
      .subscribe((data) => {
        this.products = data.products;
      })

  }


}
