import { Optional } from "sequelize";

export interface DetalleRutinaAttributes {
    id?:number;
    rutinaId: number;
    ejercicioId: number;
    fecha: string;
    series: string;
}

export interface DetalleRutinaCreationAttributes extends Optional<DetalleRutinaAttributes, 'id'> { }