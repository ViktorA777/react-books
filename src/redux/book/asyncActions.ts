import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchBooksArgs } from "./types";
import axios from "axios";

export const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export const API_KEY = "AIzaSyAxkRWaihssmxEyS2QOr1hVa7kIHe8jT1g";

const MAX_RESULTS = "&maxResults=30";

export const fetchBooks = createAsyncThunk(
  "book/fetchBooks",
  async (arg: FetchBooksArgs) => {
    const { search, categoryId, sortPick, pagination } = arg;
    const res = await axios.get(
      `${BASE_URL}${search}${categoryId}${sortPick}${pagination}${MAX_RESULTS}&key=${API_KEY}`
    );
    console.log(res);
    return res.data;
  }
);
