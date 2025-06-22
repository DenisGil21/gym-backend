import { Ejercicio } from "../models";

export class EjercicioService {
    async getEjercicios(): Promise<Ejercicio[]> {
        return Ejercicio.findAll();
    }
}