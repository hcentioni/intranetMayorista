export interface ListadoProductosI {
    IdArticulo:number  ;
    Codigo:String ;
    Detalle :String ;
    DetalleCorto :String ;
    Moneda:String ;
    Simbolo:String ;
    P_Neto:number  ;
    TipoAlicuota:String ;
    Iva: number;
    P_Final:number  ;
    Imagen:String ;
    StockLogico:number  ;
    StockMin:number ;
    StockMax:number ;
    StockResto:number ;
    CarruselCategoria: Boolean;
    Carrucel:Boolean;
    totalRows: number ;
    Dto1: number ;
    Dto_Neto: number ;
    P_NetoDto: number ;
    Dto_Final: number ;
    P_FinalDto: number ;
}
