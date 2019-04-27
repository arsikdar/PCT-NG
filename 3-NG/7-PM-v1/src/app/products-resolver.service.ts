import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router'
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<any> {

  constructor(private productsService: ProductsService) { }

  resolve() {
    return this.productsService.loadProducts();
  }

}
