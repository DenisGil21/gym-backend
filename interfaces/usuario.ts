import { Optional } from "sequelize";

export interface UsuarioAttributes {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    activo: boolean;
}

export interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id'> { }
