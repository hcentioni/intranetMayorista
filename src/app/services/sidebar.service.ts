import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class SidebarService {

  private url=environment.API_URL;

  constructor(private http:HttpClient, private router: Router) { }

  empresaGet(){
    return this.http.get<any> (this.url + "api/empresa")
   }

  menu: any[] = [{

    titulo: 'Mi Cuenta',
    icono: 'nav-icon far fa-address-card',
    submenu: [
      { titulo: 'Datos de la empresa', url: 'empresa' },
      { titulo: 'Listado de Usuarios', url: 'perfiles' },
      { titulo: 'Datos personales', url: 'perfil' },
    ]
  },
  {
    titulo: 'Productos',
    icono: 'nav-icon fas fa-dolly',
    submenu: [
      { titulo: 'Listado de productos', url: 'listado' },
      { titulo: 'Lista de precio', url: '' },
    ]
  },
  {
    titulo: 'Pedidos',
    icono: 'nav-icon fas fa-shopping-cart',
    submenu: [
      { titulo: 'Nuevo Pedido', url: 'pedido' },
      { titulo: 'Listado de pedidos', url: 'listapedidos' },
    ]
  }
  ,
  {
    titulo: 'Cta Corriente',
    icono: 'nav-icon fas fa-money-check',
    submenu: [
      { titulo: 'Estado de cuenta', url: 'ctacte' },
      { titulo: 'Comprobantes', url: 'comprobantes' },
    ]
  }
];

// usuario: any[] = [{
//     userName: 'Hernan',
//     imagen:"./assets/dist/img/foto-perfil.jpg"
//     //imagen:"./assets/dist/img/user2-160x160.jpg"
// }];


}

