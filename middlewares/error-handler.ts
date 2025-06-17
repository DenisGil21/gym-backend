import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
  console.error(err);
  res.status(500).json({
    message: 'Ha ocurrido un error interno en el servidor',
    error: err.message
  });
};

export default errorHandler;