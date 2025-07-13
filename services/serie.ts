import { SerieData } from "../interfaces/serie";
import Serie from "../models/series";

export class SerieService {
    async postSerie(ejercicioId: number, detallerutinaId: number, series: SerieData[]): Promise<Serie> {

        return await Serie.create({
            ejercicioId,
            detallerutinaId,
            series
        });
    }
}