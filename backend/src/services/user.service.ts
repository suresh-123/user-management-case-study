import { IBaseUser, IUser, IUserPaginationResponse } from "@src/types";
import UserModel from "@src/models/user.model";
import { generateUUID, excludeTableFields } from "@utils/helper";

class UserService {
  async createUser(input: IBaseUser): Promise<IUser> {
    const userData = {
      userId: generateUUID(),
      ...input,
    };

    const user = new UserModel(userData);
    await user.save();
    return user;
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    return UserModel.findOne({ email }, excludeTableFields).exec();
  }

  async getAllUsers(
    page: number,
    limit: number
  ): Promise<IUserPaginationResponse> {
    const userPromise = UserModel.find({}, excludeTableFields)
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    const [users, totalCount] = await Promise.all([
      userPromise,
      UserModel.countDocuments().exec(),
    ]);

    return {
      users,
      totalCount,
    };
  }

  async getUserByUserId(userId: string): Promise<IUser | null> {
    return UserModel.findOne({ userId }, excludeTableFields).exec();
  }
}

export default new UserService();
