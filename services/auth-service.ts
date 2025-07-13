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
                error: 'Correo / Password no son correctos - correo',
            }
        }

        // SI el usuario está activo
        if (!usuario.activo) {
            return {
                status: "BAD REQUEST",
                error: 'Usuario / Password no son correctos - estado: false',
            }
        }

        // Verificar la contraseña
        const validPassword = compareSync(password, usuario.password);
        if (!validPassword) {
            return {
                status: "BAD REQUEST",
                error: 'Usuario / Password no son correctos - password',
            }
        }

        // Generar el JWT
        const token = await generarJWT(usuario.id);
        let { password: password1, ...usuarioSinPassword } = usuario.get({ plain: true })

        return {
            status: "SUCCESS",
            usuario: usuarioSinPassword,
            token
        }
    }

    async getUsuario(id: number): Promise<Usuario | null> {
        return await Usuario.findByPk(id);
    }
}