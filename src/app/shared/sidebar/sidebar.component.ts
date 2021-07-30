import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  userName: string;
  avatar: string;
  EmpresaFantasia: string;
  userData = (JSON.parse(atob(localStorage.getItem('token').split('.')[1])).user);
  constructor(private sidebarService: SidebarService, public authService: AuthService) {

    this.menuItems = sidebarService.menu;

    //this.usuarios = sidebarService.usuario;
  }

  ngOnInit(): void {
      // this.userData=(JSON.parse(atob(localStorage.getItem('token').split('.')[1])).user)
      this.userName = this.userData.Usuario;  
      this.sidebarService.empresaGet()
      .subscribe(res => {
      this.avatar= "./assets/dist/img/sinPerfil.jpg";
      this.EmpresaFantasia= res[0].RazonSocial;
      },
        err => alert("problema al cargar la empresa")
      )
  }
  
 
}
