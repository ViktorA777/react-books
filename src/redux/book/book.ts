import { createSlice } from "@reduxjs/toolkit";
import { BookItem, BookSliceState } from "./types";
import { fetchBooks } from "./asyncActions";

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
