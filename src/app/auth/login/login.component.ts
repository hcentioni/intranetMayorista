import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    userName: '',
    userPass: '',
    baseUrl: window.location.origin + '/'
  };

  constructor(private router: Router,
    private authService: AuthService) { }
  ngOnInit(): void {
  }

  onLogin() {
    this.authService.singUp(this.user)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
        err => {
          this.informarError();
        }
      )
  }
  informarError(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El usuario o la contraseña son incorrectos!',
    })
  }
  
}
