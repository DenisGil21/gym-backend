import { NextFunction, Request, Response } from "express";
import Usuario from "../models/usuarios";
import { JwtPayload, verify } from "jsonwebtoken";

export interface RequestAuth extends Request {
    usuario?: Usuario;
}

const validarJWT = async (req: RequestAuth, res: Response, next: NextFunction) => {

    const token = req.header('token');

    if (!token) {
        res.status(401).json({
            msg: 'No hay token en la petición'
        });
        return;
    }

    try {

        const { id } = verify(token, process.env.SECRETORPRIVATEKEY || '') as JwtPayload;
        console.log(id);

        // leer el usuario que corresponde al uid
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
            return
        }

        // Verificar si el uid tiene estado true
        if (!usuario.activo) {
            res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            })
            return
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




export default validarJWT;