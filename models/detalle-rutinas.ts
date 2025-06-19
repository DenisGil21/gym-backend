import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import { DetalleRutinaAttributes, DetalleRutinaCreationAttributes } from "../interfaces/detalle-rutina";

class DetalleRutina extends Model<DetalleRutinaAttributes, DetalleRutinaCreationAttributes> implements DetalleRutinaAttributes {
  public id!: number;
  public rutinaId!: number;
  public ejercicioId!: number;
  public fecha!: string;
  public series!: string;
}

DetalleRutina.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  rutinaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'rutinas',
      key: 'id'
    }
  },
  ejercicioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'ejercicios',
      key: 'id'
    }
  },
  fecha: DataTypes.DATE,
  series: DataTypes.JSON
}, {
  sequelize: db,
  tableName: 'detalle_rutina',
  timestamps: false
});


export default DetalleRutina;
