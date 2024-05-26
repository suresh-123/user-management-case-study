import { IUserService } from "../types";
import { httpClient } from "../common/httpClient";

const userService: IUserService = {
  createUser: async (userData) => {
    return await httpClient("post", "/users", userData);
  },
  fetchusers: async (pageNumber = 1, pageLimit = 10) => {
    console.log(`pageNumber...${pageNumber}...${pageLimit}`)
    return await httpClient("get", "/users", "", {
      page: pageNumber,
      per_page: pageLimit,
    });
  },
};

export default userService;
