import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductListI } from 'src/app/models/product-list';
import { SpinnerService } from 'src/app/services/spinner.service';
import { ProductsService } from '../../services/products.service';
import {MatDialog} from "@angular/material/dialog";
// import { PopproductodetalleComponent } from '../modales/popproductodetalle/popproductodetalle.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent implements OnInit {
  // Must be declared as "any", not as "DataTables.Settings"
  dtOptions: DataTables.Settings = {};
  productos!: ProductListI[];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private api: ProductsService, private spinnerService: SpinnerService ,public dialog: MatDialog) { }


  ngOnInit(): void {
    this.dtOptions = {
      
      pagingType: 'first_last_numbers',
      pageLength: 10,
      lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "Todos"] ],
      
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        },
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: false,
      info: true,
      autoWidth: true,
      responsive: true,
      dom: 'Bfrtip'
    };
    this.api.productsGet().subscribe(data =>{
         this.productos = data;
         this.dtTrigger.next();
       });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();

  }
  // openDialog() {
  //   const dialogRef = this.dialog.open(PopproductodetalleComponent,{});
  //   dialogRef.afterClosed().subscribe(res =>{
  //     console.log(res)
  //   })

  // }
}
