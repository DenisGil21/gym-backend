import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import { RutinaAttributes, RutinaCreationAttributes } from "../interfaces/rutina";
import Usuario from "./usuarios";

class Rutina extends Model<RutinaAttributes, RutinaCreationAttributes> implements RutinaAttributes {
    public id!: number;
    public nombre!: string;
}

Rutina.init({
    nombre: DataTypes.STRING(100),
}, {
    sequelize: db,
    tableName: 'rutinas',
    timestamps: false // <-- Esto debe coincidir con tu tabla
});

export default Rutina;