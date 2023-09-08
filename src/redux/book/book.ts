import { createSlice } from "@reduxjs/toolkit";
import { BookItem, BookSliceState } from "../../Components/types";
import { fetchBooks, fetchCurrentBook } from "./asyncActions";

const initialState: BookSliceState = {
  books: [],
  singleBook: null,
  status: "loading",
  searchValue: "",
  searchClick: "",
  totalBooks: 0,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setValue(state, action) {
      state.searchValue = action.payload;
    },
    setSearchClick(state, action) {
      state.searchClick = action.payload;
    },
    clearSingleBook(state) {
      state.singleBook = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCurrentBook.pending, (state) => {
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
    builder.addCase(
      fetchCurrentBook.fulfilled,
      (state, action: { payload: BookItem }) => {
        state.status = "success";
        state.singleBook = action.payload;
      }
    );
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(fetchCurrentBook.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { setValue, setSearchClick, clearSingleBook } = bookSlice.actions;

export default bookSlice.reducer;
