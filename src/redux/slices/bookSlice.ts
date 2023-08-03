import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type FetchBooksArgs = {
  searchValue: string;
  categoryId: string;
  sort: string;
  currentPage: number;
};

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const API_KEY = "AIzaSyAxkRWaihssmxEyS2QOr1hVa7kIHe8jT1g";

export const fetchBooks = createAsyncThunk(
  "book/fetchBooks",
  async (arg: FetchBooksArgs) => {
    const { searchValue, categoryId, sort, currentPage } = arg;
    const { data } = await axios.get(
      `${BASE_URL}?q=${searchValue}${categoryId}&orderBy=${sort}&startIndex=${currentPage}&maxResults=30&key=${API_KEY}`
    );
    return data;
  }
);

export type BookItem = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string;
    categories: string;
    imageLinks: {
      smallThumbnail: string;
    };
  };
};

type TStatus = "loading" | "success" | "error";

type BookSliceState = {
  books: BookItem[];
  status: TStatus;
  searchValue: string;
  searchClick: string;
  totalBooks: number;
};

const initialState: BookSliceState = {
  books: [],
  status: "loading",
  searchValue: "",
  searchClick: "",
  totalBooks: 0,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBookData(state, action) {
      state.books = action.payload;
    },
    setValue(state, action) {
      state.searchValue = action.payload;
    },
    setSearchClick(state, action) {
      state.searchClick = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchBooks.fulfilled,
      (
        state,
        action: { payload: { totalItems: number; items: BookItem[] } }
      ) => {
        state.status = "success";
        state.books = action.payload.items;
        state.totalBooks = action.payload.totalItems;
      }
    );
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { setBookData, setValue, setSearchClick } = bookSlice.actions;

export default bookSlice.reducer;
