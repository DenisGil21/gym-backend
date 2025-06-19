import { NonAttribute, Optional } from "sequelize";
import { RutinaEjerciciosAttributes } from "./rutina-ejercicios";

export interface UsuarioAttributes {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    activo: boolean;
    rutinaEjercicios?: NonAttribute<RutinaEjerciciosAttributes[]>;
}

// esta interfaz sirve para que al guardar omita id, ya que es autoincremental
export interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id'> { }
