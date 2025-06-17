import { Router } from "express";
import { login } from "../controllers/auth";
import { body } from "express-validator";
import validate from "../middlewares/validate";

const router = Router();

router.post('/login', [
    body('email').exists().withMessage('Email obligatorio')
        .bail()
        .trim()
        .isEmail().withMessage("email inválido"),
    body('password').notEmpty().withMessage('Password obligatorio'),
    validate
], login);

export default router;