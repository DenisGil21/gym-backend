import { Router } from "express";
import { getUsuario, getUsuarios, postUsuario, putUsuario } from "../controllers/usuarios";

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.get('/', putUsuario);

export default router;