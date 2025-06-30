import { Request, Response } from "express";
import generarJWT from "../helpers/generar-jwt";
import { AuthService } from "../services/auth-service";
import { RequestAuth } from "../middlewares/validate-jwt";

export class AuthController {

    private authService = new AuthService();

    login = async (req: Request, res: Response) => {

        const { email, password } = req.body;

        let resService = await this.authService.login(email, password);

        if (resService.status == "ERROR") {
            res.status(400).json({
                msg: 'Correo / Password no son correctos - correo'
            });
        } else {
            res.json({
                status: resService.status,
                data: {
                    msg: resService.msg,
                    token: resService.token,
                    usuario: resService.usuario
                },

            })
        }

    }

    refreshToken = async (req: RequestAuth, res: Response) => {
        let usuarioAuth = req.usuario;

        const token = await generarJWT(Number(usuarioAuth?.id));

        res.json({
            status: "SUCCESS",
            data: {
                token,
                usuarioAuth
            }
        });


    }

}
