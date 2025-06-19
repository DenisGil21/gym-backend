import { Router } from "express";
import { getUsuario, getUsuarioRutinas, getUsuarios, postUsuario } from "../controllers/usuarios";
import validate from "../middlewares/validate";
import usuarioDTO from "../dtos/usuario-dto";

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.get('/:id/rutinas', getUsuarioRutinas);
router.post('/',[...usuarioDTO, validate], postUsuario);

export default router;