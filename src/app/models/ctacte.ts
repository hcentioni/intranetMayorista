export interface CtacteI {
    IdMovimiento: number;	
    fecha: Date;
    FchVtoPago: Date;
    Comprobante: string;
    Estado	: string;
    pendiente: number;
    debe: number;
    haber: number;
    Acumulado: number;
}
