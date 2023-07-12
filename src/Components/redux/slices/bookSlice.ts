import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk<BookItem[], string>(
  "book/fetchBooks",
  async (arg) => {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${arg}&key=AIzaSyAxkRWaihssmxEyS2QOr1hVa7kIHe8jT1g&maxResults=30`
    );
    return data.items;
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

interface BookSliceState {
  books: BookItem[];
  status: "loading" | "success" | "error";
  value: string;
}

const initialState: BookSliceState = {
  books: [],
  status: "loading",
  value: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBookData(state, action) {
      state.books = action.payload;
    },
    setValue(state, action) {
      state.value = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = "success";
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { setBookData, setValue } = bookSlice.actions;

export default bookSlice.reducer;
