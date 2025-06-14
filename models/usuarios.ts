import { DataTypes } from "sequelize";
import db from "../db/connection";
import Rutina from "./rutinas";

const Usuario =  db.define('Usuario',{
    nombre: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    password: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
}, {
    tableName: 'usuarios',
    timestamps: false, // <-- Esto debe coincidir con tu tabla
    defaultScope: {
        attributes: { exclude: ['password'] }
      },
      scopes: {
        withPassword: {
        }
      }
});

Usuario.hasMany(Rutina,{ foreignKey: 'usuarioId', as: 'rutinas' });
Rutina.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });

export default Usuario;