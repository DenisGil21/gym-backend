import { Request, Response } from "express"
import { DetalleRutinaPayload } from "../interfaces/detalle-rutina";
import { DetalleRutinaService } from "../services/detalle-rutina";

export class DetalleRutinaController {

    private detalleRutinaService = new DetalleRutinaService();

    postDetalleRutina = async (req: Request, res: Response) => {
        let body: DetalleRutinaPayload = req.body;
        
        let detalleRutina = await this.detalleRutinaService.postDetalleRutina(body);

        res.status(201).json({
            status:"SUCCESS",
            data: detalleRutina
        });
    }
}