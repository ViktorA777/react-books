import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchBooksArgs } from "./types";
import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const API_KEY = "AIzaSyAxkRWaihssmxEyS2QOr1hVa7kIHe8jT1g";

const MAX_RESULTS = "&maxResults=30";

export const fetchBooks = createAsyncThunk(
  "book/fetchBooks",
  async (arg: FetchBooksArgs) => {
    const { searchValue, categoryId, sort, currentPage } = arg;
    const { data } = await axios.get(
      `${BASE_URL}?q=${searchValue}${categoryId}&orderBy=${sort}&startIndex=${currentPage}${MAX_RESULTS}=30&key=${API_KEY}`
    );
    return data;
  }
);
