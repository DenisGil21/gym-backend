import { NonAttribute, Optional } from "sequelize";
import { RutinaAttributes } from "./rutina";

export interface UsuarioAttributes {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    activo: boolean;
    rutinas?: NonAttribute<RutinaAttributes[]>;
}

// esta interfaz sirve para que al guardar omita id, ya que es autoincremental
export interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id'> { }
