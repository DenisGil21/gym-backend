import { DetalleRutina } from "../models";

export class DetalleRutinaService {
    async postDetalleRutina(rutinaId: number, fecha: string): Promise<DetalleRutina> {

        return await DetalleRutina.create({
            rutinaId,
            fecha
        });
    }
}