import { body } from "express-validator";

const usuarioDTO = [
    body('nombre').
        exists().withMessage('Nombre obligatorio')
        .bail()
        .notEmpty().withMessage("El nombre no puede estar vacio"),

    body('email').
        exists().withMessage('Email obligatorio')
        .bail()
        .trim()
        .isEmail(),
    
    body('password').
        exists().withMessage('Password obligatorio')
        .bail()
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
];

export default usuarioDTO;


