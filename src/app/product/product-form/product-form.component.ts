import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createForm();

    if (this.activatedRoute.snapshot.params['id']) {
      console.log('aqui');
      this.productService
        .findById(this.activatedRoute.snapshot.params['id'])
        .subscribe((response: any) => {
          this.form.patchValue(response.data[0]);
        });
    }
  }

  createForm() {
    this.form = this.formBuild.group({
      name: [''],
      description: [''],
      price: ['']
    });
  }

  submit() {
    if (this.activatedRoute.snapshot.params['id']) {
      this.productService
        .update(this.form.value, this.activatedRoute.snapshot.params['id'])
        .subscribe(response => {
          this.router.navigate([
            '/product/list',
            { msg: 'Produto editado com sucesso' }
          ]);
        });
    } else {
      this.productService.create(this.form.value).subscribe(response => {
        this.router.navigate([
          '/product/list',
          { msg: 'Produto criado com sucesso' }
        ]);
      });
    }
  }
}
