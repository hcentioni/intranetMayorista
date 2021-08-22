import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { StockComponent } from './stock/stock.component';
import { AuthGuardGuard } from '../auth-guard.guard'
import { EmpresaComponent } from './empresa/empresa.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { CtacteComponent } from './ctacte/ctacte.component';
import { ComprobantesComponent } from './comprobantes/comprobantes.component';
import { ProductodetalleComponent } from './productodetalle/productodetalle.component';
import { ProductsComponent } from './products/products.component';
import { NuevopedidoComponent } from './pedidos/nuevopedido/nuevopedido.component';
import { ListadopedidosComponent } from './pedidos/listadopedidos/listadopedidos.component';

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent , canActivate:[AuthGuardGuard],
    children: [
      { path: '', component: DashboardComponent, canActivate:[AuthGuardGuard], data:{titulo:'¡Bienvenido!'} },
      { path: 'usuarios', component: UsuariosComponent, canActivate:[AuthGuardGuard], data:{titulo:'Usuarios'} },
      { path: 'stock', component: StockComponent, canActivate:[AuthGuardGuard], data:{titulo:'Stock'} },
      { path: 'empresa', component: EmpresaComponent, canActivate:[AuthGuardGuard], data:{titulo:'Empresa'} },
      { path: 'perfiles', component: PerfilesComponent, canActivate:[AuthGuardGuard], data:{titulo:'Perfiles'} },
      { path: 'perfil', component: PerfilComponent, canActivate:[AuthGuardGuard], data:{titulo:'Perfil'} },
      { path: 'ctacte', component: CtacteComponent, canActivate:[AuthGuardGuard], data:{titulo:'Cuenta Corriente'} },
      { path: 'comprobantes', component: ComprobantesComponent, canActivate:[AuthGuardGuard], data:{titulo:'Comprobantes'} },
      { path: 'productos', component: ProductosComponent, canActivate:[AuthGuardGuard], data:{titulo:'Productos'} },
      { path: 'listado/productodetalle/:id', component: ProductodetalleComponent, canActivate:[AuthGuardGuard], data:{titulo:'Producto Detalle'} },
      { path: 'listado', component: ProductsComponent, canActivate:[AuthGuardGuard], data:{titulo:'Productos'} },
      { path: 'pedido', component: NuevopedidoComponent, canActivate:[AuthGuardGuard], data:{titulo:'Nuevo Pedido'} },
      { path: 'listapedidos', component: ListadopedidosComponent, canActivate:[AuthGuardGuard], data:{titulo:'Listado De Pedidos'} },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
