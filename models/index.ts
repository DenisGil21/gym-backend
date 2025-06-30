import Ejercicio from "./ejercicios";
import RutinaEjercicio from "./rutina-ejercicios";
import Rutina from "./rutinas";
import Usuario from "./usuarios";
import DetalleRutina from './detalle-rutinas';
import Serie from "./series";

// Usuario -> Rutinas
Usuario.hasMany(Rutina, { foreignKey: 'usuarioId', as: 'rutinas'});
Rutina.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });

// Rutina -> Ejercicios
Rutina.belongsToMany(Ejercicio, { through: RutinaEjercicio, foreignKey: 'rutinaId', as: 'ejercicios'});
Ejercicio.belongsToMany(Rutina, { through: RutinaEjercicio, foreignKey: 'ejercicioId', as: 'rutinas' });

Rutina.hasMany(DetalleRutina, { foreignKey: 'rutinaId', as: 'detallerutina'});
DetalleRutina.belongsTo(Rutina, { foreignKey: 'rutinaId', as: 'rutina'});


Ejercicio.belongsToMany(DetalleRutina, { through: Serie, foreignKey: 'ejercicioId', as: 'serieEjercicios' });
DetalleRutina.belongsToMany(Ejercicio, { through: Serie, foreignKey: 'detallerutinaId', as: 'serieDetalleRutinas' });

export {
    Usuario,
    Rutina,
    Ejercicio,
    RutinaEjercicio,
    DetalleRutina
}