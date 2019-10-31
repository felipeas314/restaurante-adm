import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-login',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  role: string;

  user: string;

  title = 'restaurante-admin-novo';

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.user = localStorage.getItem('user');
  }
}
