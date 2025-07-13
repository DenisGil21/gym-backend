
export interface DetalleRutinaAttributes {
    id?: number;
    rutinaId: number;
    fecha: string;
    activo: boolean;
}

export interface DetalleRutinaCreationAttributes extends Partial<Pick<DetalleRutinaAttributes, 'id' | 'activo'>> {
    rutinaId: number;
    fecha: string;
}