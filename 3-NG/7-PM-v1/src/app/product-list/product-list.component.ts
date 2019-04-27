import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Array<any> = []
  loadingMessage: string = '';

  // productsService = null;
  // constructor(productsService: ProductsService) {
  //   this.productsService = productsService;
  // }
  // -- OR --
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // this.products = [
    //   { id: 1, name: "item-1", price: 1000.00 },
    //   { id: 2, name: "item-2", price: 2000.00 }
    // ]

    // this.products = this.productsService.loadProducts(); // pull / sync

    // let promise = this.productsService.loadProducts()
    // this.loadingMessage = "Loading products...";
    // promise.then((response: any) => {
    //   this.loadingMessage = "";
    //   this.products = response;
    // })



    // let stream = this.productsService.loadProducts();
    // stream.subscribe(
    //   (response: any) => {
    //     this.products = response;
    //   }
    // )


    this.route.data
      .subscribe(data => {
        this.products = data.products
      })



  }

  deleteProduct(id, event) {
    event.preventDefault()
    this.productsService.deleteProduct(id)
      .subscribe(response => {
        this.products = this.products.filter(prod => prod.id !== id);
      })
  }

}
