import React, { useEffect } from "react";

import styles from "./search.module.scss";
import search from "../../assets/icons/search.svg";

import { fetchBooks } from "../../redux/book/asyncActions";
import { setValue, setSearchClick } from "../../redux/book/book";
import { useAppDispatch } from "../../redux/store";
import { selectBookData } from "../../redux/book/selectors";
import { selectFilter } from "../../redux/filter/selectors";
import { useAppSelector } from "../../redux/store";

const Search: React.FC = () => {
  const { searchValue, searchClick } = useAppSelector(selectBookData);
  const { category, sort, currentPage } = useAppSelector(selectFilter);

  const dispatch = useAppDispatch();

  const getBooks = () => {
    const categoryId = category != "All" ? `+subject:${category}` : "";

    dispatch(fetchBooks({ searchValue, categoryId, sort, currentPage }));

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getBooks();
  }, [sort, currentPage, searchClick, category]);

  return (
    <div className={styles.block}>
      <img className={styles.img} src={search} />
      <input
        value={searchValue}
        onKeyDown={(e) => dispatch(setSearchClick(e.key === "Enter"))}
        onChange={(e) => dispatch(setValue(e.target.value))}
        className={styles.input}
        type="text"
        placeholder="Enter the book"
      />
    </div>
  );
};
export default Search;
