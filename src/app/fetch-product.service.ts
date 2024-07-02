import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchProductService {


  constructor( private http:HttpClient) { }

  api_url = "https://betafullstack.pythonanywhere.com/products"

  getProducts(){
    return this.http.get(this.api_url)
  }

}
