import { compareSync } from "bcrypt";
import { Usuario } from "../models";
import generarJWT from "../helpers/generar-jwt";

export class AuthService {
    async login(email: string, password: string){
        // Verificar si el email existe
        const usuario = await Usuario.scope().findOne({
            where: {
                email
            }
        });
        if (!usuario) {
            return {
                status: "BAD REQUEST",
                msg: 'Correo / Password no son correctos - correo',
                usuario: null
            }
        }

        // SI el usuario está activo
        if (!usuario.activo) {
            return {
                status: "BAD REQUEST",
                msg: 'Usuario / Password no son correctos - estado: false',
                usuario: null
            }
        }

        // Verificar la contraseña
        const validPassword = compareSync(password, usuario.password);
        if (!validPassword) {
            return {
                status: "BAD REQUEST",
                msg: 'Usuario / Password no son correctos - password',
                usuario: null,
            }
        }

        // Generar el JWT
        const token = await generarJWT(usuario.id);
        let { password: password1, ...usuarioSinPassword } = usuario.get({ plain: true })

        return {
            status: "SUCCESS",
            msg: "Usuario logueado",
            usuario: usuarioSinPassword,
            token
        }
    }

    async getUsuario(id: number): Promise<Usuario | null> {
        return await Usuario.findByPk(id);
    }
}