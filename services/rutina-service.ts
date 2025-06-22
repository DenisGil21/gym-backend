import { Rutina } from "../models";


export class RutinaService {

    async postRutina(nombre: string, usuarioId: number, ejercicios: number[]): Promise<Rutina> {
        let rutina = await Rutina.create({
            nombre,
            usuarioId
        });

        await rutina.setEjercicios([...ejercicios])
        return rutina;
    }
}