import { Request, Response } from "express";
import Usuario from "../models/usuarios";
import { genSaltSync, hashSync } from "bcrypt";


export const getUsuarios = async (req: Request, res: Response) => {
    const { limit = 5, page = 1 } = req.query;
    let offset = Number(limit) * (Number(page) -1);

    const {count, rows} = await Usuario.findAndCountAll(
        {
            where:{ activo: true},
            offset,
            limit: Number(limit)
        }
    );

    res.json({
        message: 'SUCCESS',
        data: {
            usuarios:rows,
            size: count
        }
    })
}

export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        res.status(404).json({
            message: 'NOT FOUND'
        })
    }
    res.json({
        message: 'SUCCESS',
        data: usuario
    })
}


export const postUsuario = async (req: Request, res: Response) => {
    const { nombre, email, password } = req.body;

    const salt = genSaltSync();
    const hash = hashSync(password.toString(), salt);

    const usuario = await Usuario.create({
        nombre,
        email,
        password: hash,
        activo: true

    });
    res.status(201).json({
        message: 'SUCCESS',
        body: usuario
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

