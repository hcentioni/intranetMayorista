import { Component, OnInit  } from '@angular/core';
import { Subject } from 'rxjs';
import { ListadoProductosI } from 'src/app/models/listado-productos';
import { ProductsService } from '../../services/products.service';
import { PageEvent } from '@angular/material/paginator';
import { SpinnerService } from 'src/app/services/spinner.service';
import { CarritoService } from 'src/app/services/carrito.service';
import Swal from 'sweetalert2';
import { SuggestService } from 'src/app/services/suggest.service';
import { Parametrosproductos } from 'src/app/models/parametrosproductos';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    parmatros:Parametrosproductos={
    PageNum: 1,
    PageSize: 25,
    tnCodigo: null,
    Detalle: null,
    IdArticulo: null,
    IdMarca: null,
    IdCategoria: null,
    IdSubCategoria: null,
    IdFamlia: null,
    tnTipoListado: 2
  };

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  listadoProducto!: ListadoProductosI[];


  // MatPaginator Inputs
  page :number=1;
  pageSize :number= 25;
  length = 100;

  pageSizeOptions: number[] = [5, 10, 25, 50, 100];

  // Salida MatPaginator
  pageEvent: PageEvent;

  constructor(
          private api: ProductsService,
          private apiSuggest : SuggestService,
          private spinnerService: SpinnerService,
          public carritoService: CarritoService
          ) { }


  ngOnInit(): void {
    this.dtOptions = {
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
      },
      info: true,
      autoWidth: true,
      responsive: true,
      serverSide: true,
      processing: true,
    };
    this.onCargarDatos(this.parmatros)
    this.carritoService.disparadorCarrito.subscribe(data => {
      let src = document.getElementById('carrito_Cantidad');
      src.innerText=data;
    } )
    this.apiSuggest.disparadorSelecccion.subscribe(data=>{
      this.parmatros=data
      this.onCargarDatos(this.parmatros);
    })
  };

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => + str);
    }
  }
  onPaginateChange(event: PageEvent) {
    this.parmatros.PageNum= event.pageIndex;
    this.parmatros.PageSize= event.pageSize;
    if (this.parmatros.PageNum == 0) {
      this.parmatros.PageNum = this.parmatros.PageNum + 1;
    }
    this.onCargarDatos(this.parmatros);
  }
  onCargarDatos(params: Parametrosproductos) {
    this.api.productsPaginados(params).subscribe(data => {
      this.length = data[0].totalRows;
      this.listadoProducto = data;
    });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  addCarrito(producto: ListadoProductosI){
    let inputValue = ((document.getElementById(producto.IdArticulo + 'TextBox') as HTMLInputElement).value);
    if (!isNaN(parseInt(inputValue))) {
      let cant: number = parseInt(inputValue);
      if (cant > 0) {
        if (!localStorage.getItem('carrito')) {
          this.carritoService.loadCarrrito();
        }
        this.carritoService.getCarrito();
        this.carritoService.addProduct(producto,cant);
      }
      let src = document.getElementById(producto.IdArticulo + 'TextBox');
      src.innerText='0';
     this.mostrarMensaje();
    }
  }

  mostrarMensaje(){
    var Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500
    });
    Toast.fire({
      icon: 'success',
      title: 'Producto Agregado Al Carrito'
    })
  }


  handleSearch(value:string){
   // console.log(value);
  }

}
