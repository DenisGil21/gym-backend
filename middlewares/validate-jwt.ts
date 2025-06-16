import { NextFunction, Request, Response } from "express";
import Usuario from "../models/usuarios";
import { JwtPayload, verify } from "jsonwebtoken";

export interface RequestExt extends Request {
    usuario?: Usuario;
  }

const validarJWT = async (req: RequestExt, res: Response, next: NextFunction) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {

        const { id } = verify(token, process.env.SECRETORPRIVATEKEY || '') as JwtPayload;
        console.log(id);

        // leer el usuario que corresponde al uid
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        }

        // Verificar si el uid tiene estado true
        if (!usuario.activo) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            })
        }


        req.usuario = usuario;
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}




module.exports = {
    validarJWT
}