import { Document, model, Schema } from 'mongoose';
import { IUser } from '@src/types';

export type IUserModel = Document & IUser;

const userSchema = new Schema<IUserModel>(
  {
    userId: { type: String, unique: true },
    firstName: String,
    lastName: String,
    email: String,
  },
  { timestamps: true }
);

const UserModel = model<IUserModel>("User", userSchema);

export default UserModel;
