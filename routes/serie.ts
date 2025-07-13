import { Router } from "express";
import { SerieController } from "../controllers/series";


const router = Router();

const serieController = new SerieController();


router.post('/', serieController.postSeries);

export default router;