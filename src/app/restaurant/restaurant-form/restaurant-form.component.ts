import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html'
})
export class RestaurantFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuild: FormBuilder) {}

  ngOnInit() {}
}
