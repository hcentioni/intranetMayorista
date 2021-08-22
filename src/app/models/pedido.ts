import { ListadoProductosI } from "./listado-productos";

export interface NotaDeVentaI {
    IdVendedor:number  ;
    IdCliente: number ;
    SubTotalNeto:number;
    NetoGrabado: number ;
    Iva:number  ;
    Dto:number;
    Total:number  ;
    IdUsuario: number ; 
    IdMoneda:number  ;
    Nota: string ;
    Productos: ProductoPedido[];
}
export interface ProductoPedido{
    producto: ListadoProductosI;
    cantidad: number ;
}

