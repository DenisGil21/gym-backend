import { Router } from "express";
import { RutinaController } from "../controllers/rutinas";

const rutinaController = new RutinaController();
const router = Router();

router.post('/', rutinaController.postRutinas);

export default router;
