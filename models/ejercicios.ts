import { DataTypes } from "sequelize";
import db from "../db/connection";
import Rutina from "./rutinas";

const Ejercicio =  db.define('Ejercicio',{
    nombre: DataTypes.STRING(100),
    imagen: DataTypes.STRING(250),
}, {
    tableName: 'ejercicios',
    timestamps: false // <-- Esto debe coincidir con tu tabla
});

Rutina.belongsToMany(Ejercicio, {through: 'rutina_ejercicios'});
Ejercicio.belongsToMany(Rutina, {through: 'rutina_ejercicios'});

export default Ejercicio;