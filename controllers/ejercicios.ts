import { Request, Response } from "express";
import { EjercicioService } from "../services/ejercicio-service";


export class EjerciciosController {

    private ejercicioService = new EjercicioService();

    getEjercicios = async (req: Request, res: Response) => {
        let ejercicios = await this.ejercicioService.getEjercicios();
        res.json({
            data: ejercicios,
            status: "SUCCESS"
        });
    }
}