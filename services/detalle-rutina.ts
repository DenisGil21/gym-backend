import { DetalleRutinaPayload } from "../interfaces/detalle-rutina";
import { DetalleRutina } from "../models";

export class DetalleRutinaService {
    async postDetalleRutina(detalleRutinaPayload: DetalleRutinaPayload) {

        let { rutinaId, ejercicios, fecha, series } = detalleRutinaPayload; 

        const registros = ejercicios.map(ejercicioId => ({
            rutinaId,
            ejercicioId,
            fecha,
            series
        }));
        return await DetalleRutina.bulkCreate(registros);
    }
}