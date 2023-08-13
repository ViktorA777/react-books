import { RootState } from "../store";

export const selectFilter = (state: RootState) => state.filter;

export const selectFilterCategory = (state: RootState) => state.filter.category;

export const selectFilterSort = (state: RootState) => state.filter.sort;
