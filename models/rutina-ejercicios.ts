import { DataTypes, Model, NonAttribute } from "sequelize";
import db from "../db/connection";
import { RutinaEjerciciosAttributes } from '../interfaces/rutina-ejercicios';
import { RutinaAttributes } from "../interfaces/rutina";
import { EjercicioAttributes } from "../interfaces/ejercicio";

class RutinaEjercicio extends Model<RutinaEjerciciosAttributes> implements RutinaEjerciciosAttributes {
  public usuarioId!: number;
  public rutinaId!: number;
  public ejercicioId!: number;

  public rutina?:  NonAttribute<RutinaAttributes>;
  public ejercicio?:  NonAttribute<EjercicioAttributes>;
}

RutinaEjercicio.init({
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
  }
}, {
  sequelize: db,
  tableName: 'rutinas_ejercicios',
  timestamps: false
});




export default RutinaEjercicio;
