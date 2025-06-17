import { Optional } from "sequelize";

export interface EjercicioAttributes {
    id?: number;
    nombre: string;
    imagen: string;
}

export interface EjercicioCreationAttributes extends Optional<EjercicioAttributes, 'id'> { }
