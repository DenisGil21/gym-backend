import { Optional } from "sequelize";

export interface RutinaAttributes {
    id?: number;
    nombre: string;
    usuarioId:number
}

export interface RutinaCreationAttributes extends Optional<RutinaAttributes, 'id'> { }
