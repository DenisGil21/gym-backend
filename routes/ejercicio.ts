import { Router } from "express";
import { EjerciciosController } from "../controllers/ejercicios";

const ejercicioController = new EjerciciosController();
const router = Router();

router.get('/', ejercicioController.getEjercicios);

export default router;