import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchBooksArgs, FetchCurrentBookArg } from "../../Components/types";
import { bookService } from "../../Components/api/BookService";

export const fetchBooks = createAsyncThunk(
  "book/fetchBooks",
  async (arg: FetchBooksArgs) => {
    const { searchValue, categoryId, sort, currentPage } = arg;

    const res = bookService.getBooks({
      searchValue,
      categoryId,
      sort,
      currentPage,
    });
    return res;
  }
);

export const fetchCurrentBook = createAsyncThunk(
  "book/fetchSingleBook",
  async (arg: FetchCurrentBookArg) => {
    const { id } = arg;

    const res = bookService.getBookById({ id });
    return res;
  }
);

// ${sortPick}${pagination}${MAX_RESULTS}
