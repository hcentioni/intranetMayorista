import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListadoProductosI } from '../models/listado-productos';
import { NotaDeVentaI, ProductoPedido } from '../models/pedido';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  userData = (JSON.parse(atob(localStorage.getItem('token').split('.')[1])).user);
  @Output() disparadorCarrito: EventEmitter<any> = new EventEmitter();

  private pedido: NotaDeVentaI;

  constructor(private http: HttpClient) { }

  initPedido() {
    this.pedido = {
      IdVendedor: this.userData.IdVendedor ,
      IdCliente: this.userData.IdCliente,
      SubTotalNeto: 0,
      NetoGrabado:  0,
      Iva: 0,
      Total: 0,
      Dto:this.userData.Dto2,
      IdUsuario: this.userData.IdClienteContacto,
      IdMoneda: this.userData.IdMoneda,
      Nota: '',
      Productos: [],
    }
  }

  loadCarrrito() {
    this.initPedido();
    this.calcularPedido();
  }

  addCarrito() {

  }

  addProduct(producto: ListadoProductosI, cantidad: number) {
    const item = this.pedido.Productos.find(productoPedido => {
      return (productoPedido.producto.IdArticulo === producto.IdArticulo);
    });
    if (item) {
      item.cantidad=cantidad;
    } else {
      const addNew: ProductoPedido = {
        cantidad: cantidad,
        producto,
      }
      this.pedido.Productos.push(addNew);
    }
    localStorage.setItem('carrito', JSON.stringify( this.pedido));
    let cantidadTotal:number=0;
    this.pedido.Productos.forEach (function(numero){
      cantidadTotal += numero.cantidad;
  });
    this.calcularPedido();

    this.disparadorCarrito.emit(cantidadTotal);
  }


  deleteProduct(producto: ListadoProductosI){
    const item = this.pedido.Productos.find(productoPedido => {
      return (productoPedido.producto.IdArticulo === producto.IdArticulo);
    });
    if (item) {
      let i=  this.pedido.Productos.indexOf(item);
      this.pedido.Productos.splice(i,1)
      localStorage.setItem('carrito', JSON.stringify( this.pedido));
    }
    this.calcularPedido();

    this.disparadorCarrito.emit(1);
  }
  getCarrito(){
    if (localStorage.getItem('carrito')) {
     this.pedido = JSON.parse(localStorage.getItem('carrito'));
    }else{
      this.initPedido();
    }
    return this.pedido;
  }
  
  calcularPedido(){
    let subTotal:number=0;
    let dtoPorcentaje:number=this.userData.Dto2;
    let neto:number=0;
    let iva:number=0;
    let total:number=0;

    this.pedido.Productos.forEach(element =>{
      subTotal+=(element.producto.P_NetoDto * element.cantidad)
      iva+=(element.producto.P_NetoDto * element.cantidad)*(element.producto.Iva/100)
      if (dtoPorcentaje>0){
        neto-=subTotal - (subTotal * (dtoPorcentaje/100))
      }else{
        neto=subTotal;
      }
    });
    total=neto + iva
    this.pedido.SubTotalNeto=subTotal;
    this.pedido.NetoGrabado=neto;
    this.pedido.Iva=iva;
    this.pedido.Total=total;
     localStorage.setItem('carrito', JSON.stringify( this.pedido));
  }

  realizarPedido() {

  }

  clearPedido() {
    localStorage.removeItem('carrito')
  }
}
