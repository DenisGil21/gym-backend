import { DataTypes, Model, NonAttribute } from "sequelize";
import db from "../db/connection";
import { UsuarioAttributes, UsuarioCreationAttributes } from "../interfaces/usuario";
import { RutinaAttributes } from "../interfaces/rutina";


class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
    public id!: number;
    public nombre!: string;
    public email!: string;
    public password!: string;
    public activo!: boolean;
    
    // Esto es para consultas
    public rutinas?: NonAttribute<RutinaAttributes[]>;

    //   // Esto es para guardar el association
    // public static RutinaEjerciciosAssociation: Association<Usuario, RutinaEjercicio>;

}

Usuario.init({
    nombre: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    password: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
}, {
    sequelize: db,
    tableName: 'usuarios',
    timestamps: false, // <-- Esto debe coincidir con tu tabla
    defaultScope: {
        attributes: { exclude: ['password'] }
    },
    scopes: {
        withPassword: {
        }
    }
})

export default Usuario;