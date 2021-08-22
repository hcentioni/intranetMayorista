import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class MarcasService {
  private url=environment.API_URL;

  constructor(private http:HttpClient) { }

  marcasGet(){
    return this.http.get<any> (this.url + `api/marcas`)
   }
}
