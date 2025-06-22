import { genSaltSync, hashSync } from "bcrypt";
import { Ejercicio, Rutina, Usuario } from "../models";
import { UsuarioCreationAttributes } from "../interfaces/usuario";

export class UsuarioService {

    async getUsuariosService(){

    }

    async getUsuarioRutinasEjercicios(id: string, rutinaId: string): Promise<Usuario | null> {
        return await Usuario.findByPk(id, {
            include: [{
                model: Rutina, as: 'rutinas',
                where: {
                    id: rutinaId
                },
                required: true,   // Hace INNER JOIN para filtrar rutinas
                include: [{
                    model: Ejercicio, as: 'ejercicios',
                    required: false         // LEFT JOIN, trae ejercicios si hay
                }]
            }]
        });
    }

    async getUsuarioRutinas(id: string): Promise<Usuario | null> {
        return await Usuario.findByPk(id, {
            include: [{
                model: Rutina, as: 'rutinas',
            }]
        });
    }

    async postUsuario(saveUsuario: UsuarioCreationAttributes):Promise<Usuario | null> {
        const salt = genSaltSync();
        const hash = hashSync(saveUsuario.password.toString(), salt);

        return await Usuario.create({
            ...saveUsuario,
            password: hash,
            activo: true
        });
    }
}