import { Request, Response } from "express";
import Usuario from "../models/usuarios";
import { UsuarioCreationAttributes } from "../interfaces/usuario";
import { UsuarioService } from '../services/usuario-service';


// Se usa arrow function por el motivo:
// Cuando Express llama a tu método router el this ya no es el usuarioController, es undefined (modo estricto) o globalThis / window (modo no estricto)
// por consecuencia hay que usar bind

export class UsuarioController {

    private usuarioService = new UsuarioService();

    getUsuarios = async (req: Request, res: Response) => {
        const { limit = 5, page = 1 } = req.query;
        let offset = Number(limit) * (Number(page) - 1);

        const { count, rows } = await Usuario.findAndCountAll(
            {
                where: { activo: true },
                offset,
                limit: Number(limit)
            }
        );

        res.json({
            message: 'SUCCESS',
            data: {
                usuarios: rows,
                size: count
            }
        });
    }

    getUsuario = async (req: Request, res: Response) => {
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
        });
    }

    postUsuario = async (req: Request, res: Response) => {
        const saveUsuario: UsuarioCreationAttributes = req.body;

        let usuario = await this.usuarioService.postUsuario(saveUsuario);

        res.status(201).json({
            message: 'SUCCESS',
            body: usuario
        });
    }

    getUsuarioRutinas = async (req: Request, res: Response) => {
        const { id } = req.params;

        let usuario = await this.usuarioService.getUsuarioRutinas(id);

        res.json({
            message: 'SUCCESS',
            data: usuario?.rutinas
        });
    }

    getUsuarioRutinasEjercicios = async (req: Request, res: Response) => {
        const { id, rutinaId } = req.params;

        let usuario = await this.usuarioService.getUsuarioRutinasEjercicios(id, rutinaId);

        res.json({
            message: 'SUCCESS',
            data: usuario?.rutinas
        });
    }

}