import { instance } from "./api_config";
import {
  FetchCurrentBookArg,
  AllBookResponse,
  BookItem,
} from "../components/types";

export const bookService = {
  async getBooks(queryString: string) {
    const response = await instance.get<AllBookResponse>(queryString);
    return response.data;
  },

  async getBookById({ id }: FetchCurrentBookArg) {
    const response = await instance.get<BookItem>(`${id}`);
    return response.data;
  },
};
