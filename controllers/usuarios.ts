import { Request, Response } from "express";
import Usuario from "../models/usuarios";

export const getUsuarios = async (req: Request, res: Response) => {
    const usuarios = await Usuario.findAll();
    res.json({
        msg: 'OK',
        data: usuarios
    })
}

export const getUsuario = (req: Request, res: Response) => {
    res.json({
        msg: 'getUsuarios'
    })
}


export const postUsuario = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        msg: 'getUsuarios',
        body
    })
}

export const putUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'getUsuarios',
        body
    })
}

