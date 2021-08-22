import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
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
import { CtacteComponent } from './ctacte/ctacte.component';
import { ComprobantesComponent } from './comprobantes/comprobantes.component';
import { ProductodetalleComponent } from './productodetalle/productodetalle.component';
import { ProductsComponent } from './products/products.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NuevopedidoComponent } from './pedidos/nuevopedido/nuevopedido.component';
import { ListadopedidosComponent } from './pedidos/listadopedidos/listadopedidos.component';
import { ReactiveFormsModule } from '@angular/forms';


/*Angula material*/
import { MaterialModule } from '../shared/material.module';


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
    CtacteComponent,
    ComprobantesComponent,
    ProductodetalleComponent,
    ProductsComponent,
    NuevopedidoComponent,
    ListadopedidosComponent,
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
    CtacteComponent,
    ComprobantesComponent,
    PagesComponent,
    NgxSpinnerModule,
    MaterialModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    NgxSpinnerModule,
    FlexLayoutModule,
    MaterialModule,
  ]
})
export class PagesModule { }
