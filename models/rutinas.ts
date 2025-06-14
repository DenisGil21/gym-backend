import { DataTypes } from "sequelize";
import db from "../db/connection";

const Rutina =  db.define('Rutina',{
    nombre: DataTypes.STRING(100),
}, {
    tableName: 'rutinas',
    timestamps: false // <-- Esto debe coincidir con tu tabla
});

export default Rutina;