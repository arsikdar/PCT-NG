import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Final-demo';

  progress1: number = 0;
  progress2: number = 0;

  product = {
    name: 'Item',
    price: 100.00
  };

  constructor(private zone: NgZone) { }


  ngOnInit() {
    setInterval(() => {
      // this.product.price = this.product.price + 100; // mutable
      this.product = { ...this.product, price: this.product.price + 100 } // immutable
    }, 2000);
  }

  processWithinAngularZone() {
    this.progress1 = 0;
    this.increaseProgress1(() => console.log('Done!'));
  }

  processOutsideAngularZone() {
    this.progress2 = 0;
    this.zone.runOutsideAngular(() => {
      this.increaseProgress2(() => {
        this.zone.run(() => {
          console.log('Outside Done!');
        });
      });
    });
  }

  increaseProgress1(doneCallback) {
    this.progress1 += 1;
    console.log(`Current progress: ${this.progress1}%`);
    if (this.progress1 < 100) {
      window.setTimeout(() => {  // async
        this.increaseProgress1(doneCallback);
      }, 100);
    } else {
      doneCallback();
    }
  }


  increaseProgress2(doneCallback: () => void) {
    this.progress2 += 1;
    console.log(`Current progress: ${this.progress2}%`);
    if (this.progress2 % 10 === 0) {
      this.zone.run(() => { console.log('10%') })
    }
    if (this.progress2 < 100) {
      window.setTimeout(() => {
        this.increaseProgress2(doneCallback);
      }, 100);
    } else {
      doneCallback();
    }
  }




}
