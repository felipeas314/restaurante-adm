import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuild: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      email: [''],
      password: ['']
    });
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);
        localStorage.setItem('user', response.user);
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.loginForm.value);
  }
}
