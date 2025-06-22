import { Router } from "express";
import { DetalleRutinaController } from "../controllers/detalle-rutinas";

const detalleRutinaController = new DetalleRutinaController();
const router = Router();

router.post('/', detalleRutinaController.postDetalleRutina);

export default router;