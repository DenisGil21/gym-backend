import { Optional } from "sequelize";

export interface DetalleRutinaAttributes {
    id?: number;
    rutinaId: number;
    fecha: string;
    activo: boolean;
}

export interface DetalleRutinaCreationAttributes extends Optional<DetalleRutinaAttributes, 'id'> { }