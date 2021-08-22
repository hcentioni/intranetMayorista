import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from '../../services/sidebar.service';
import {Title} from "@angular/platform-browser";
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  EmpresaFantasia: string;
  constructor(
    private sidebarService: SidebarService, 
    public authService: AuthService,
    private titleService:Title,
    private carritoService: CarritoService
    ) { }

  ngOnInit(): void {
    this.carritoService.disparadorCarrito.subscribe(data => {
      let src = document.getElementById('carrito_Cantidad');
      src.innerText=data;
    } )
    this.sidebarService.empresaGet()
    .subscribe(res => {
    this.EmpresaFantasia= res[0].RazonSocial;
    this.titleService.setTitle(res[0].RazonSocial);
    },
      err => alert("problema al cargar la empresa")
    )
  }

}
