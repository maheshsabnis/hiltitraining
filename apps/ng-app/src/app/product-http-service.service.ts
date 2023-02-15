import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/app.product.model';

@Injectable({
  providedIn: 'root' /* root: For all Contents for tehj currenly loaded app */
                      /* platform: Feature Modules */
                      /* any: LAzy Loading */
})
export class ProductHttpServiceService {
  private url:string;
  constructor(private http:HttpClient) {
    this.url = 'https://localhost:7279/';
  }

  get():Observable<Product[]> {
    const resp = this.http.get<Product[]>(`${this.url}api/ProductsAPI`);
    return resp;
  }
  getById(id:number):Observable<Product> {
    const resp = this.http.get<Product>(`${this.url}api/ProductsAPI/${id}`);
    return resp;
  }
  post(prd:Product):Observable<Product> {
    const resp = this.http.post<Product>(`${this.url}api/ProductsAPI`, prd, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return resp;
  }
  put(id:number,prd:Product):Observable<Product> {
    const resp = this.http.put<Product>(`${this.url}api/ProductsAPI/${id}`, prd, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return resp;
  }

  delete(id:number):Observable<Product> {
    const resp = this.http.delete<Product>(`${this.url}api/ProductsAPI/${id}`);
    return resp;
  }
}
