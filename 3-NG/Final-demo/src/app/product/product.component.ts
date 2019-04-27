import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {


  @Input() product;

  constructor() { }

  ngOnInit() {
  }

}
