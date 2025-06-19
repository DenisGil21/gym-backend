import { Router } from "express";
import validate from "../middlewares/validate";
import usuarioDTO from "../dtos/usuario-dto";
import { UsuarioController } from "../controllers/usuarios";

const router = Router();
const usuarioController = new UsuarioController();

router.get('/', usuarioController.getUsuarios);
router.get('/:id', usuarioController.getUsuario);
router.get('/:id/rutinas', usuarioController.getUsuarioRutinas);
router.get('/:id/rutinas/:rutinaId/ejercicios', usuarioController.getUsuarioRutinasEjercicios);
router.post('/',[...usuarioDTO, validate], usuarioController.postUsuario);

export default router;