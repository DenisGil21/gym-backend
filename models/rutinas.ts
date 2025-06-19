import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import { RutinaAttributes, RutinaCreationAttributes } from "../interfaces/rutina";

class Rutina extends Model<RutinaAttributes, RutinaCreationAttributes> implements RutinaAttributes {
    public id!: number;
    public nombre!: string;
    public usuarioId!: number;
}

Rutina.init({
    nombre: DataTypes.STRING(100),
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      }
}, {
    sequelize: db,
    tableName: 'rutinas',
    timestamps: false // <-- Esto debe coincidir con tu tabla
});

export default Rutina;