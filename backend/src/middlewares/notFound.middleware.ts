import { Request, Response } from 'express';
import { sendErrorResponse } from '@src/utils/responseHandler';

function notFoundHandler(_req: Request, res: Response) {
  sendErrorResponse(res, 404);
}

export default notFoundHandler;