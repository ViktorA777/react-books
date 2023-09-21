import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchBooksArgs, FetchCurrentBookArg } from "../../components/types";
import { bookService } from "../../api/BookService";

export const fetchBooks = createAsyncThunk(
  "book/fetchBooks",
  async (arg: FetchBooksArgs, { rejectWithValue }) => {
    try {
      const { queryString } = arg;

      const response = bookService.getBooks(queryString);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentBook = createAsyncThunk(
  "book/fetchSingleBook",
  async (arg: FetchCurrentBookArg, { rejectWithValue }) => {
    try {
      const { id } = arg;

      const response = bookService.getBookById({ id });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
