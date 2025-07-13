import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
  console.error(err);
  res.status(500).json({
    status: 'INTERNAL SERVER',
    error: err.message
  });
};

export default errorHandler;