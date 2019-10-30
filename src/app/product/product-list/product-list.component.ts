import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['msg']);
    this.getProducts();
  }

  getProducts() {
    this.productService.index().subscribe((response: any) => {
      this.products = response.data;
    });
  }

  delete(id) {
    this.productService.delete(id).subscribe(response => {
      this.getProducts();
    });
  }
}
