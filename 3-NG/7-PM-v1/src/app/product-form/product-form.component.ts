import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { debounceTime } from 'rxjs/operators'
import { badWord } from './custom-validators'
import { ProductsService } from '../products.service';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {


  productForm: FormGroup;
  productFormErrors: any = {}

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // this.productForm = new FormGroup({
    //   name: new FormControl(''),
    //   price: new FormControl(0)
    // });
    // -- OR --
    this.productForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.min(0)]],
      canBuy: [false],
      image: [''],
      description: ['', badWord]
    })

    let nameControl = this.productForm.get('name');

    nameControl.statusChanges
      .pipe(debounceTime(3000))
      .subscribe(status => {
        // console.log(status)
        // if (nameControl.touched) {
        if (status === 'INVALID') {
          if (nameControl.errors.required) {
            this.productFormErrors.name = "Name is required"
          }
          if (nameControl.errors.minlength) {
            this.productFormErrors.name = "Name must be > 3 chars"
          }
        }
        if (status === 'VALID') {
          delete this.productFormErrors.name
          // }
        }
      })
    this.productForm.get('name').valueChanges
      .subscribe(value => {
        // console.log(value)
      })



    // this.route.params.subscribe(params => {
    //   this.productsService.loadProduct(params.prodId)
    //     .subscribe(response => {
    //       this.productForm.patchValue(response)
    //     })
    // })

    this.route.data
      .subscribe(data => {
        if (data.product)
          this.productForm.patchValue(data.product)
      })


  }


  handleCanBuy(event) {
    let bo = this.productForm.get('canBuy').value
    let imgControl = this.productForm.get('image')
    if (!bo) {
      imgControl.setValidators([Validators.required])
    } else {
      imgControl.clearValidators();
    }
    imgControl.updateValueAndValidity();
  }


  handleForm(event) {
    event.preventDefault();
    let productModel = this.productForm.value;
    if (productModel.id)
      this.productsService.updateProduct(productModel)
        .subscribe(response => {
          this.router.navigate(['/all'])
        })
    else {
      delete productModel.id;
      this.productsService.saveProduct(productModel)
        .subscribe(response => {
          this.router.navigate(['/all'])
        })
    }
  }

}
