import { DataTypes, Model, Optional } from "sequelize";
import db from "../db/connection";
import { UsuarioAttributes, UsuarioCreationAttributes } from "../interfaces/usuario";


class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
    public id!: number;
    public nombre!: string;
    public email!: string;
    public password!: string;
    public activo!: boolean;
}

Usuario.init({
    nombre: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    password: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
},{
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
// Usuario.hasMany(Rutina, { foreignKey: 'usuarioId', as: 'rutinas' });
// Rutina.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });

export default Usuario;