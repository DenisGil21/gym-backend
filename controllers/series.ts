import { Request, Response } from "express";
import { SerieService } from "../services/serie";

export class SerieController {

    private serieService = new SerieService();

    postSeries = async (req: Request, res: Response) => {
        let { ejercicioId, detallerutinaId, series } = req.body;

        let serie = await this.serieService.postSerie(ejercicioId, detallerutinaId, series);

        res.status(201).json({
            status: "SUCCESS",
            data: serie
        });
    }
}
