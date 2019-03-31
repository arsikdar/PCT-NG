import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: Array<any> = [
    {
      id: 111,
      name: 'Laptop',
      price: 198000,
      canBuy: true,
      image: 'assets/images/Laptop.png',
      description: 'New Mac pro'
    },
    {
      id: 222,
      name: 'Mobile',
      price: 18000,
      canBuy: true,
      image: 'assets/images/Mobile.png',
      description: 'New  pro'
    }
  ]

  currentTab: number = 1

  changeTab(tabIndex: number, e: any) {
    e.preventDefault();
    this.currentTab = tabIndex;
  }

  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex;
  }


}
