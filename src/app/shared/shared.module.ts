/*Angular*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/*Componentes*/
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DataTablesModule } from 'angular-datatables';
import { SettingComponent } from './setting/setting.component';
import { ItemcarritoComponent } from './itemcarrito/itemcarrito.component';
import { ShearchComponent } from './shearch/shearch.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductoOfertaComponent } from './producto-oferta/producto-oferta.component';
import { ProductImageThumbsComponent } from './product-image-thumbs/product-image-thumbs.component';


/*angular material*/
import { MaterialModule } from './material.module';

/*ngx-owl*/
import { CarouselModule } from 'ngx-owl-carousel-o';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    FooterComponent,
    SettingComponent,
    ItemcarritoComponent,
    ShearchComponent,
    ProductlistComponent,
    ProductoOfertaComponent,
    ProductImageThumbsComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    FooterComponent,
    DataTablesModule,
    SettingComponent,
    ItemcarritoComponent,
    ShearchComponent,
    ReactiveFormsModule,
    FormsModule,
    ProductoOfertaComponent,
    ProductImageThumbsComponent,
    MaterialModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    MaterialModule
  ]
})
export class SharedModule { }
