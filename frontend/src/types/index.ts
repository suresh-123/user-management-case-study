export interface IComponentBaseProps {
  children: React.ReactNode;
}

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export type HttpMethod = "get" | "post" | "put" | "delete";

export type AlertColor = "success" | "info" | "warning" | "error";

export interface ILayoutProps {
  children: React.ReactNode;
}

export interface IHttpResponse<T> {
  status: boolean;
  message: string | string[];
  data?: T;
}

export interface ISnackbarProps {
  isOpen: boolean;
  message: string | string[] | undefined;
  severity: AlertColor;
  autoHideDuration?: number;
}

export interface IContainerProps extends IComponentBaseProps {
  title: string;
  maxWidth?: Breakpoint;
}

export interface IBaseUser {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUser extends IBaseUser {
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITablePaginationResponse {
  users: IUser[];
  totalCount: number;
}

export interface IUserService {
  createUser: (input: IBaseUser) => Promise<IHttpResponse<IUser>>;
  fetchusers: (
    pageNumber: number,
    pageLimit: number
  ) => Promise<IHttpResponse<ITablePaginationResponse>>;
}

export interface ITableProps<T> {
  headers: string[];
  data: T[];
  page: number;
  setPage: (pageNumber: number) => void;
  totalRows: number;
}