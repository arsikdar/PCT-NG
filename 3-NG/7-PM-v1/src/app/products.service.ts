import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  apiUrl = "http://0.0.0.0:8080/api/products";

  constructor(private _http: HttpClient) { }

  loadProducts() {

    // return [
    //   { id: 1, name: "item-1", price: 1000.00 },
    //   { id: 2, name: "item-2", price: 2000.00 }
    // ]

    //-------------------------------------------------------------
    // way-1 : using Promise API
    //-------------------------------------------------------------

    // let promise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     let products = [
    //       { id: 1, name: "item-1", price: 1000.00 },
    //       { id: 2, name: "item-2", price: 2000.00 }
    //     ]
    //     resolve(products) // push / async
    //   }, 3000)
    // });
    // return promise;
    //-------------------------------------------------------------


    //-------------------------------------------------------------
    // way-2 : RxJS
    //-------------------------------------------------------------

    // let stream = new Observable(observer => {
    //   setInterval(() => {
    //     let products = [
    //       { id: 1, name: "item-1", price: 1000.00 },
    //       { id: 2, name: "item-2", price: 2000.00 }
    //     ]
    //     observer.next(products) // push / async
    //   }, 1000);
    // });
    // return stream

    return this._http.get(this.apiUrl)



  }

  loadProduct(prodId) {
    let apiUrl = `${this.apiUrl}/${prodId}`;
    return this._http.get(apiUrl)
  }

  saveProduct(product) {
    return this._http.post(this.apiUrl, product)
  }

  updateProduct(product) {
    let apiUrl = `${this.apiUrl}/${product.id}`;
    return this._http.put(apiUrl, product)
  }

  deleteProduct(prodId) {
    let apiUrl = `${this.apiUrl}/${prodId}`;
    return this._http.delete(apiUrl)
  }


}
