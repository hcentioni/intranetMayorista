import { Component, Input, OnInit } from '@angular/core';
import { NotaDeVentaI } from 'src/app/models/pedido';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-nuevopedido',
  templateUrl: './nuevopedido.component.html',
  styleUrls: ['./nuevopedido.component.css']
})
export class NuevopedidoComponent implements OnInit {
  

  pedido: NotaDeVentaI
  today = Date.now();
  userData = (JSON.parse(atob(localStorage.getItem('token').split('.')[1])).user);
 
 
  constructor(public carritoService: CarritoService) {
        this.loadPedido();
   }

  ngOnInit(): void {
    
    this.carritoService.disparadorCarrito.subscribe(data => {
      this.loadPedido();
    } )
  }

  loadPedido(){
   this.pedido = this.carritoService.getCarrito();
  }

  //IMPRESION
  printer() {
    console.log('imprimit')
    const printContent = document.getElementById("impresion");
    console.log(printContent);
    const WindowPrt = window.open('', '', 'left=0,top=50,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }


}
