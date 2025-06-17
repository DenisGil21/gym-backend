import { Response, Request, NextFunction } from 'express';
import { validationResult } from 'express-validator';



const validate = ( req: Request, res:Response, next:NextFunction ): void => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        res.status(400).json(errors);
        return;
    }

    next();
}



export default validate;