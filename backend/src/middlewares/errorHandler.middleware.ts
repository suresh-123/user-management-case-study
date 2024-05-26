import { Request, Response, NextFunction } from 'express';
import { sendErrorResponse } from '@src/utils/responseHandler';
import HttpException from '@utils/httpException';

const errorHandler = (
  error: HttpException,
  _request: Request,
  response: Response,
  _next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  sendErrorResponse(response, statusCode, error.message);
};

export default errorHandler;