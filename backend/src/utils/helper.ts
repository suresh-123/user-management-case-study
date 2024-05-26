import { v4 as uuidv4 } from "uuid";

export const generateUUID = () => uuidv4();

export const excludeTableFields = { _id: 0, __v: 0 };

export const alphabeticPattern = /^[a-zA-Z]+$/;

export const defaultPageLimit =
  parseInt(process.env.PAGE_LIMIT as string) || 15;
