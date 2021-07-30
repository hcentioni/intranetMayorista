import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private url='http://localhost:3000/';
  private url=environment.API_URL;

  constructor(private http:HttpClient, private router: Router) { 

  }
  singUp(user){
   return this.http.post<any> (this.url + "login",user)
  }

  loggedIn(){
    if (localStorage.getItem('token')){
      if (this.tokenExpired(localStorage.getItem('token'))) {
        return false
      } else {
        return true
      }
    }else{
      return false
    }
  }
  getToken(){
    return localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
  
}
