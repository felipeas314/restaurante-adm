import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  title = 'restaurante-admin-novo';

  form: FormGroup;

  constructor(private dashboardService: DashboardService, private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuild.group({
      nome: ['']
    });
  }

  create(){
    console.log(this.form.value);
  }
}
