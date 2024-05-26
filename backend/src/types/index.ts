export interface IBaseUser {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUser extends IBaseUser {
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserPaginationResponse {
  users: IUser[];
  totalCount: number;
}

export interface IMessages {
  httpCode: {
    [key: number]: string;
  };
  error: {
    [key: string]: string;
  };
}

export interface IErrorResponseBody {
  success: boolean;
  message: string | string[];
}
