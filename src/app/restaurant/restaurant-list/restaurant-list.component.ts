import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html'
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(
    private restaurantService: RestaurantService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['msg']);
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.index().subscribe((response: any) => {
      console.log(response);
      this.restaurants = response.data;
    });
  }

  delete(id) {
    this.restaurantService.delete(id).subscribe(response => {
      console.log(response);
      this.getRestaurants();
    });
  }
}
