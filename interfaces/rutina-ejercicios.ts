import { EjercicioAttributes } from "./ejercicio";
import { RutinaAttributes } from "./rutina";
import { NonAttribute } from 'sequelize';

export interface RutinaEjerciciosAttributes {
    rutinaId: number;
    ejercicioId: number;
    ejercicio?: NonAttribute<EjercicioAttributes>;
    rutina?: NonAttribute<RutinaAttributes>;
}