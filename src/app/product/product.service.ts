import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  index() {
    return this.http.get('http://localhost:3000/api/v1/products');
  }

  create(product: Product) {
    return this.http.post('http://localhost:3000/api/v1/products', product);
  }

  update(product: Product, id) {
    return this.http.put(
      `http://localhost:3000/api/v1/products/${id}`,
      product
    );
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/api/v1/products/${id}`);
  }

  findById(id) {
    return this.http.get(`http://localhost:3000/api/v1/products/${id}`);
  }
}
