import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import Rutina from "./rutinas";
import Usuario from "./usuarios";
import Ejercicio from "./ejercicios";

class DetalleRutina extends Model {
  public id!: number;
  public usuarioId!: number;
  public rutinaId!: number;
  public ejercicioId!: number;
}

DetalleRutina.init({
  fecha: DataTypes.DATE,
  series: DataTypes.JSON
}, {
  sequelize: db,
  tableName: 'detalle_rutina',
  timestamps: false
});

Usuario.hasMany(DetalleRutina, { foreignKey: 'usuarioId', as: 'detallerutinas' });
Rutina.hasMany(DetalleRutina, { foreignKey: 'rutinaId', as: 'detallerutinas' });
Ejercicio.hasMany(DetalleRutina, { foreignKey: 'ejercicioId', as: 'detallerutinas' });
Ejercicio.hasMany(DetalleRutina, { foreignKey: 'usuarioId', as: 'rutinas' });
DetalleRutina.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });
DetalleRutina.belongsTo(Rutina, { foreignKey: 'rutinaId', as: 'rutina' });
DetalleRutina.belongsTo(Ejercicio, { foreignKey: 'ejercicioId', as: 'ejercicio' });

export default DetalleRutina;
