import { createSlice } from "@reduxjs/toolkit";

type Category = {
  category: string;
  sort: string;
  currentPage: number;
};

const initialState: Category = {
  category: "All",
  sort: "Relevance",
  currentPage: 1,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
      state.currentPage = state.currentPage;
    },
    setSort(state, action) {
      state.sort = action.payload;
      state.currentPage = state.currentPage;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategory, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
