import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'online-shopping';

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

  currentTab = 1;

  changeTab(tabIndex, event) {
    event.preventDefault();
    this.currentTab = tabIndex;
  }
  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex;
  }

}
