import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import { EjercicioAttributes, EjercicioCreationAttributes } from '../interfaces/ejercicio';

class Ejercicio extends Model<EjercicioAttributes, EjercicioCreationAttributes> implements EjercicioAttributes {
    public id!: number;
    public nombre!: string;
    public imagen!: string;
}

Ejercicio.init({
    nombre: DataTypes.STRING(100),
    imagen: DataTypes.STRING(250),
}, {
    sequelize: db,
    tableName: 'ejercicios',
    timestamps: false // <-- Esto debe coincidir con tu tabla
});

export default Ejercicio;