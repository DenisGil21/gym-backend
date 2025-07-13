import { Request, Response } from "express"
import { DetalleRutinaService } from "../services/detalle-rutina";

export class DetalleRutinaController {

    private detalleRutinaService = new DetalleRutinaService();

    postDetalleRutina = async (req: Request, res: Response) => {
        let {rutinaId, fecha } = req.body;
        
        let detalleRutina = await this.detalleRutinaService.postDetalleRutina(rutinaId, fecha);

        res.status(201).json({
            status:"SUCCESS",
            data: detalleRutina
        });
    }
}