import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import qs from 'qs'
import { Parametrosproductos } from '../models/parametrosproductos';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url=environment.API_URL;

  constructor(private http:HttpClient) { }
  productsGet(){
    return this.http.get<any> (this.url + `api/products`)
   }
   productsGetDetalleOne(id){
    return this.http.get<any> (this.url + `api/productDetalleOne/`+ id)
   }

   productsPaginados(params: Parametrosproductos){
    return this.http.get<any> (this.url + `api/productspaginado/search?${qs.stringify(params)}`)
   }
   imagenesGet(id){
    return this.http.get<any> (this.url + `api/products/imagenes/`+ id)
   }
}
