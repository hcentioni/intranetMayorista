import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url=environment.API_URL;

  constructor(private http:HttpClient) { }
  usersGet(idCliente){
    const token =localStorage.getItem('token');
    const id = (JSON.parse(atob(token.split('.')[1]))).user.IdCliente;
    
    return this.http.get<any> (this.url + `api/users/${id}`)
   }
}
