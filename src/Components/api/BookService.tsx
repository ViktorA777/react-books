import { fetchBooks } from "../../redux/book/asyncActions";
import { selectBookData } from "../../redux/book/selectors";
import { selectFilter } from "../../redux/filter/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { instance } from "./api_config";
import { FetchBooksArgs, FetchCurrentBookArg } from "../types";

export const bookService = {
  async getBooks({
    searchValue,
    categoryId,
    sort,
    currentPage,
  }: FetchBooksArgs) {
    const response = await instance.get(
      `?q=${searchValue}${categoryId}&orderBy=${sort}&startIndex=${currentPage}`
    );
    return response.data;
  },

  async getBookById({id}: FetchCurrentBookArg) {
    const response = await instance.get(`${id}`);
    return response.data;
  },
};

const BookService = () => {
  const { searchValue } = useAppSelector(selectBookData);

  const { category, sort, currentPage } = useAppSelector(selectFilter);

  const dispatch = useAppDispatch();

  const getParamsBooks = () => {
    const categoryId = category != "All" ? `+subject:${category}` : "";

    dispatch(fetchBooks({ searchValue, categoryId, sort, currentPage }));

    window.scrollTo(0, 0);
  };

  return { getParamsBooks };
};

export default BookService;
