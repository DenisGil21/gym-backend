import { body } from "express-validator";

const usuarioDTO = [
    body('nombre')
        .notEmpty().withMessage("El nombre no puede estar vacio"),

    body('email')
        .notEmpty().withMessage('Email obligatorio')
        .bail()
        .trim()
        .isEmail(),

    body('password')
        .notEmpty().withMessage('Password obligatorio')
        .bail()
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
];

export default usuarioDTO;


