import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  index() {
    return this.http.get('http://localhost:3000/api/v1/restaurants');
  }

  create(restaurant: Restaurant) {
    return this.http.post(
      'http://localhost:3000/api/v1/restaurants',
      restaurant
    );
  }

  update(restaurant: Restaurant, id) {
    return this.http.put(
      `http://localhost:3000/api/v1/restaurants/${id}`,
      restaurant
    );
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/api/v1/restaurants/${id}`);
  }

  findById(id) {
    return this.http.get(`http://localhost:3000/api/v1/restaurants/${id}`);
  }
}
