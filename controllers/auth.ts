import { Request, Response } from "express";
import Usuario from "../models/usuarios";
import { compareSync } from "bcrypt";
import generarJWT from "../helpers/generar-jwt";

export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    // Verificar si el email existe
    const usuario = await Usuario.scope().findOne({
        where: {
            email
        }
    });
    if (!usuario) {
        res.status(400).json({
            msg: 'Correo / Password no son correctos - correo'
        });
        return
    }

    // SI el usuario está activo
    if (!usuario.activo) {
        res.status(400).json({
            msg: 'Usuario / Password no son correctos - estado: false'
        });
        return
    }

    // Verificar la contraseña
    const validPassword = compareSync(password, usuario.password);
    if (!validPassword) {
        res.status(400).json({
            msg: 'Usuario / Password no son correctos - password'
        });
    }

    // Generar el JWT
    const token = await generarJWT(usuario.id);
    let { password: password1, ...usuarioSinPassword } = usuario.get({ plain: true })
    res.json({
        data: {
            token,
            usuarioSinPassword
        },

    })

}