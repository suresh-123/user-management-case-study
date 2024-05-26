import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';
import { sendErrorResponse } from '@src/utils/responseHandler';

export const validateRequest = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    
    if (error) {
      const errorDetails = error.details.map((detail) => detail.message);
      sendErrorResponse(res, 400, errorDetails);
      return;
    }

    next();
  };
};
