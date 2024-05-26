import axios, { AxiosInstance } from "axios";
import { IHttpResponse, HttpMethod } from "../types";

const baseURL = process.env.REACT_APP_BASE_URL;
const axiosClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export const httpClient = async <T>(
  method: HttpMethod,
  url: string,
  data?: unknown,
  params?: unknown
): Promise<IHttpResponse<T>> => {
  try {
    const response = await axiosClient.request<IHttpResponse<T>>({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || "An error occurred");
    }
    throw new Error("An unexpected error occurred");
  }
};
