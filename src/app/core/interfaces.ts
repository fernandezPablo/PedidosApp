export interface Cliente{
    nombre?: string;
    direccion?: string;
    zona?: string;
}

export interface Articulo{
    codigoarticu?: number;
    articu?: string;
    present?: number;
    preciovental1?: number;
}

export interface PreventaArticulo{
    articulo?: Articulo;
    cantid?: number;
    fardos?: number;
    subtotal?: number;
}