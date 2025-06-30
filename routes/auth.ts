import { Router } from "express";
import { body } from "express-validator";
import validate from "../middlewares/validate";
import { AuthController } from "../controllers/auth";
import validarJWT from "../middlewares/validate-jwt";

const authController = new AuthController();
const router = Router();

router.post('/login', [
    body('email').exists().withMessage('Email obligatorio')
        .bail()
        .trim()
        .isEmail().withMessage("email inválido"),
    body('password').notEmpty().withMessage('Password obligatorio'),
    validate
], authController.login);


router.get('/refreshtoken',validarJWT, authController.refreshToken);

export default router;