import { Optional } from "sequelize";

export interface DetalleRutinaAttributes {
    id?: number;
    rutinaId: number;
    ejercicioId: number;
    fecha: string;
    series: Serie[];
}

export interface DetalleRutinaCreationAttributes extends Optional<DetalleRutinaAttributes, 'id'> { }

export interface DetalleRutinaPayload {
    rutinaId: number;
    ejercicios: number[];
    fecha: string;
    series: Serie[];
  }

export interface Serie {
    serie: number;
    reps: number;
    peso: number;
    unidad: string;
}