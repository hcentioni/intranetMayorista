import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private url=environment.API_URL;
  
  constructor(private http:HttpClient) { }

  sliderGet(){
    return this.http.get<any> (this.url + `api/dashboard/slaider`)
   }
   getDatoscta(){
    return this.http.get<any> (this.url + `api/clientes/datoscta`)
  }
}
