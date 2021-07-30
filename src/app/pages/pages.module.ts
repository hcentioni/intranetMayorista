import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CtacteComponent } from './ctacte/ctacte.component';
import { ComprobantesComponent } from './comprobantes/comprobantes.component';
import { ProductodetalleComponent } from './productodetalle/productodetalle.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    PagesComponent,
    StockComponent,
    EmpresaComponent,
    PerfilesComponent,
    PerfilComponent,
    PedidoComponent,
    PedidosComponent,
    CtacteComponent,
    ComprobantesComponent,
    ProductodetalleComponent,
  ],
  exports: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    PagesComponent,
    StockComponent,
    EmpresaComponent,
    PerfilesComponent,
    PerfilComponent,
    PedidoComponent,
    PedidosComponent,
    CtacteComponent,
    ComprobantesComponent,
    PagesComponent,
    NgxSpinnerModule,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgxSpinnerModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class PagesModule { }
