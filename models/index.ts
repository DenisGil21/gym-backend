import Ejercicio from "./ejercicios";
import RutinaEjercicio from "./rutina-ejercicios";
import Rutina from "./rutinas";
import Usuario from "./usuarios";
import DetalleRutina from './detalle-rutinas';

// Usuario -> Rutinas
Usuario.hasMany(Rutina, { foreignKey: 'usuarioId', as: 'rutinas'});
Rutina.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });

// Rutina -> Ejercicios
Rutina.belongsToMany(Ejercicio, { through: RutinaEjercicio, foreignKey: 'rutinaId', as: 'ejercicios'});
Ejercicio.belongsToMany(Rutina, { through: RutinaEjercicio, foreignKey: 'ejercicioId', as: 'rutinas' });

Rutina.belongsToMany(Ejercicio, { through: DetalleRutina, foreignKey: 'rutinaId', as: 'detalleEjercicios'});
Ejercicio.belongsToMany(Rutina, { through: DetalleRutina, foreignKey: 'ejercicioId', as: 'detalleRutinas' });

export {
    Usuario,
    Rutina,
    Ejercicio,
    RutinaEjercicio,
    DetalleRutina
}