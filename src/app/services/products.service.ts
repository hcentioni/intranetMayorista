import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url=environment.API_URL;

  constructor(private http:HttpClient) { }
  productsGet(){
    return this.http.get<any> (this.url + `api/products`)
   }
}
