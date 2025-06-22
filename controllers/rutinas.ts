import { Request, Response } from "express";
import { RutinaService } from '../services/rutina-service';

export class RutinaController {

    private rutinaService = new RutinaService();

    postRutinas = async (req: Request, res: Response) => {
        let { nombre, usuarioId, ejercicios } = req.body;

        let rutina = await this.rutinaService.postRutina(nombre, usuarioId, ejercicios);

        res.status(201).json({
            status: "SUCCESS",
            data: rutina
        });
    }
}
