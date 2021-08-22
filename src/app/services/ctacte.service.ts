import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import qs from 'qs'
import { ParamtrosctacteI } from '../models/paramtrosctacte';

@Injectable({
  providedIn: 'root'
})
export class CtacteService {
  private url=environment.API_URL;
  
  constructor(private http:HttpClient) { }

  ctacteGet(params: ParamtrosctacteI){
    return this.http.get<any> (this.url + `api/clientes/estadocta/search?${qs.stringify(params)}`)
   }
}
