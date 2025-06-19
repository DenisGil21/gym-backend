import { genSaltSync, hashSync } from "bcrypt";
import { Ejercicio, Rutina, Usuario } from "../models";
import { UsuarioCreationAttributes } from "../interfaces/usuario";

export class UsuarioService {
    async getUsuarioRutinasEjerciciosService(id: string, rutinaId: string): Promise<Usuario | null> {
        return await Usuario.findByPk(id, {
            include: [{
                model: Rutina, as: 'rutinas',
                where: {
                    id: rutinaId
                },
                include: [{
                    model: Ejercicio, as: 'ejercicios'
                }]
            }]
        });
    }

    async getUsuarioRutinasService(id: string): Promise<Usuario | null> {
        return await Usuario.findByPk(id, {
            include: [{
                model: Rutina, as: 'rutinas',
            }]
        });
    }

    async postUsuarioService(saveUsuario: UsuarioCreationAttributes):Promise<Usuario | null> {
        const salt = genSaltSync();
        const hash = hashSync(saveUsuario.password.toString(), salt);

        return await Usuario.create({
            ...saveUsuario,
            password: hash,
            activo: true
        });
    }
}