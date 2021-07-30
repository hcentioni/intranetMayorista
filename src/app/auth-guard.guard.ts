import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { runInThisContext } from 'vm';
import { AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService:AuthService, private route:Router){

  }
  canActivate(): boolean{
    if (this.authService.loggedIn()){
      return true;
    }
    this.route.navigate(['/login'])
  }
    
}
