import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import Rutina from "./rutinas";
import Usuario from "./usuarios";
import Ejercicio from "./ejercicios";

class RutinaEjercicio extends Model {
  public usuarioId!: number;
  public rutinaId!: number;
  public ejercicioId!: number;
}

RutinaEjercicio.init({
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    }
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
  }
}, {
  sequelize: db,
  tableName: 'rutinas_ejercicios',
  timestamps: false
});

Rutina.belongsToMany(Usuario, { through: RutinaEjercicio, foreignKey: 'rutinaId' });
Rutina.belongsToMany(Ejercicio, { through: RutinaEjercicio, foreignKey: 'rutinaId' });

Usuario.belongsToMany(Rutina, { through: RutinaEjercicio, foreignKey: 'usuarioId' });
Usuario.belongsToMany(Ejercicio, { through: RutinaEjercicio, foreignKey: 'usuarioId' });

Ejercicio.belongsToMany(Usuario, { through: RutinaEjercicio, foreignKey: 'ejercicioId' });
Ejercicio.belongsToMany(Rutina, { through: RutinaEjercicio, foreignKey: 'ejercicioId' });

export default RutinaEjercicio;
