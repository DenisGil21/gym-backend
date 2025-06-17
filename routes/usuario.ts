import { Router } from "express";
import { getUsuario, getUsuarios, postUsuario, putUsuario } from "../controllers/usuarios";
import validate from "../middlewares/validate";
import usuarioDTO from "../dtos/usuario-dto";

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/',[...usuarioDTO, validate], postUsuario);
router.get('/', putUsuario);

export default router;