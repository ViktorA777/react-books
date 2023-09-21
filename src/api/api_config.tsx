import axios from "axios";

export const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export const API_KEY = "AIzaSyAxkRWaihssmxEyS2QOr1hVa7kIHe8jT1g";

export const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    maxResults: 32,
  },
});
