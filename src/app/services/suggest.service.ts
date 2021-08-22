import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuggestService {
  @Output() disparadorSelecccion: EventEmitter<any> = new EventEmitter();
  private url=environment.API_URL;

  constructor(private http:HttpClient) { }

  suggestGet(suggest:string){
    return this.http.get<any> (this.url + `api/suggest/'${suggest}'`)
   }
}
