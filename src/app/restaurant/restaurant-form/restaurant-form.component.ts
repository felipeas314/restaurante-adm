import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html'
})
export class RestaurantFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private restauranteService: RestaurantService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createForm();

    if (this.activatedRoute.snapshot.params['id']) {
      console.log('aqui');
      this.restauranteService
        .findById(this.activatedRoute.snapshot.params['id'])
        .subscribe((response: any) => {
          this.form.patchValue(response.data[0]);
        });
    }
  }

  createForm() {
    this.form = this.formBuild.group({
      name: [''],
      cnpj: [''],
      number: [''],
      street: [''],
      city: ['Fortaleza'],
      state: ['Ceara'],
      email: [''],
      phone: ['']
    });
  }

  submit() {
    if (this.activatedRoute.snapshot.params['id']) {
      this.restauranteService
        .update(this.form.value, this.activatedRoute.snapshot.params['id'])
        .subscribe(response => {
          this.router.navigate([
            '/restaurant/list',
            { msg: 'Restaurante editado com sucesso' }
          ]);
        });
    } else {
      this.restauranteService.create(this.form.value).subscribe(response => {
        this.router.navigate([
          '/restaurant/list',
          { msg: 'Restaurante criado com sucesso' }
        ]);
      });
    }
  }
}
