import { Component, Input, OnInit } from '@angular/core';
import { ListadoProductosI } from 'src/app/models/listado-productos';
import { ProductoPedido } from 'src/app/models/pedido';
import { CarritoService } from 'src/app/services/carrito.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-itemcarrito',
  templateUrl: './itemcarrito.component.html',
  styleUrls: ['./itemcarrito.component.css']
})
export class ItemcarritoComponent implements OnInit {
  myFormGroup = new FormGroup({
    formField: new FormControl()
  });

  _value: number = 0;
  _step: number = 1;
  _min: number = 1;
  _max: number = Infinity;
  _wrap: boolean = false;
  color: string = 'default';


  @Input() productoPedido: ProductoPedido;
  subTotal:number=0;
  montoIva:number=0;
  constructor(private carritoService:CarritoService) { }

  ngOnInit(): void {

    this._max =this.productoPedido.producto.StockLogico
    this._value=  this.productoPedido.cantidad
    this.subTotal=this.productoPedido.producto.P_NetoDto * this.productoPedido.cantidad
    this.montoIva= this.subTotal *  ((this.productoPedido.producto.Iva  /100 )) 
  }

  onCalcular(productoIn: any){
    if (this._value>this._max){
      this._value=this._max
    }
    this.subTotal= productoIn.producto.P_NetoDto * this._value;
    this.montoIva= this.subTotal *  ((this.productoPedido.producto.Iva  /100 ) ) 
  }

  deleteProducto(producto: ListadoProductosI){
    this.carritoService.deleteProduct(producto);
  }



  private parseNumber(num: any): number {
    return +num;
  }

  private parseBoolean(bool: any): boolean {
    return !!bool;
  }

  setColor(color: string): void {
    this.color = color;
  }

  getColor(): string {
    return this.color
  }

  incrementValue(step: number = 1, productoIn: any): void {

    let inputValue = this._value + step;

    if (this._wrap) {
      inputValue = this.wrappedValue(inputValue);
    }

    this._value = inputValue;
    this.addCarrito(productoIn,inputValue)
    this.subTotal= productoIn.producto.P_NetoDto * inputValue;
    this.montoIva= this.subTotal *  ((this.productoPedido.producto.Iva  /100 ) ) 
  }

  private wrappedValue(inputValue): number {
    console.log('ingreso:',inputValue )
    if (inputValue > this._max) {
      return this._min + inputValue - this._max;
    }

    if (inputValue < this._min) {

      if (this._max === Infinity) {
        return 0;
      }

      return this._max + inputValue;
    }

    return inputValue;
  }

  shouldDisableDecrement(inputValue: number): boolean {
    return !this._wrap && inputValue <= this._min;
  }

  shouldDisableIncrement(inputValue: number): boolean {
    return !this._wrap && inputValue >= this._max;
  }
  // FIN INCREMENT

  addCarrito(productoIn: any, cantInt){
    let prod: ListadoProductosI=productoIn.producto;
    if (!isNaN(parseInt(cantInt))) {
      let cant: number = parseInt(cantInt);
      if (cant > 0) {
        if (!localStorage.getItem('carrito')) {
          this.carritoService.loadCarrrito();
        }
        this.carritoService.getCarrito();
        this.carritoService.addProduct(prod,cantInt);
      }
    }
  }
}
