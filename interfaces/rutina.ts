import { Optional } from "sequelize";

export interface RutinaAttributes {
    id?: number;
    nombre: string;
}

export interface RutinaCreationAttributes extends Optional<RutinaAttributes, 'id'> { }
