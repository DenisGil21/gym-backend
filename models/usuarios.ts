import { DataTypes } from "sequelize";
import db from "../db/connection";

const Usuario =  db.define('Usuario',{
    nombre: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    password: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
}, {
    tableName: 'usuarios',
    timestamps: false // <-- Esto debe coincidir con tu tabla
});

export default Usuario;