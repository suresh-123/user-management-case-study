import { Request, Response } from "express";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "@src/utils/responseHandler";
import { messages } from "@common/messages";
import userService from "@services/user.service";
import { defaultPageLimit } from "@src/utils/helper";

class UserController {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const isDuplicateUser = await userService.getUserByEmail(req.body?.email);

      if (isDuplicateUser) {
        sendErrorResponse(res, 409, messages.error.duplicate_email);
        return;
      }

      const user = await userService.createUser(req.body);
      sendSuccessResponse(res, 201, { user });
    } catch (e: any) {
      sendErrorResponse(res, 500, e.message);
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.getUserByUserId(req.params.id);

      if (!user) {
        sendErrorResponse(res, 404, messages.error.user_not_found);
        return;
      }

      sendSuccessResponse(res, 200, { user });
    } catch (e: any) {
      sendErrorResponse(res, 500, e.message);
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.per_page as string) || defaultPageLimit;

      const users = await userService.getAllUsers(page, limit);
      sendSuccessResponse(res, 200, users);
    } catch (e: any) {
      sendErrorResponse(res, 500, e.message);
    }
  }
}

export default new UserController();
