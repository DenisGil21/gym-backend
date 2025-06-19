import { Request, Response } from "express";
import { Rutina } from "../models";
import { RutinaAttributes } from "../interfaces/rutina";

export class RutinaController {
    postRutinas = async (req: Request, res: Response) => {
        let { nombre, usuarioId } = req.body;

        let rutina: RutinaAttributes = await Rutina.create({
            nombre,
            usuarioId
        });

        res.status(201).json({
            status: "SUCCESS",
            data: rutina
        });
    }
}
