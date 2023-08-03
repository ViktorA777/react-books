import { configureStore } from "@reduxjs/toolkit";
import book from "./slices/bookSlice";
import filter from "./slices/filterSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    book,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
