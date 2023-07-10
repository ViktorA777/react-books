import React from "react";

import styles from "./search.module.scss";
import search from "../../assets/icons/search.svg";

import { fetchBooks } from "../redux/slices/bookSlice";
import { useSelector } from "react-redux";
import { setValue } from "../redux/slices/bookSlice";
import { RootState, useAppDispatch } from "../redux/store";

const Search: React.FC = () => {
  const { value } = useSelector((state: RootState) => state.book);

  const dispatch = useAppDispatch();

  const searchClick = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      dispatch(fetchBooks(value));
    }
  };

  return (
    <div className={styles.block}>
      <img className={styles.img} src={search} />
      <input
        value={value}
        onKeyDown={searchClick}
        onChange={(e) => dispatch(setValue(e.target.value))}
        className={styles.input}
        type="text"
        placeholder="Enter the book"
      />
    </div>
  );
};
export default Search;
