import { Router } from 'express';
import { validateRequest } from '@middlewares/validateRequest.middleware'
import { createUserSchema } from '@validation/userValidation'
import userController from '@controllers/user.controller';

const userRouter = Router();

userRouter.post('/', validateRequest(createUserSchema), userController.createUser);
userRouter.get('/:id', userController.getUserById);
userRouter.get('/', userController.getAllUsers);

export default userRouter;
