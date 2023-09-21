import React, { useEffect } from "react";

import styles from "./search.module.scss";
import search from "../../assets/icons/search.svg";

import { setValue, setSearchClick } from "../../redux/book/book";
import { useAppDispatch } from "../../redux/store";
import { selectBookData } from "../../redux/book/selectors";
import { selectFilter } from "../../redux/filter/selectors";
import { useAppSelector } from "../../redux/store";
import { fetchBooks } from "../../redux/book/asyncActions";

export const Search: React.FC = () => {
  const { searchValue, searchClick } = useAppSelector(selectBookData);

  const { category, sort, currentPage } = useAppSelector(selectFilter);

  const dispatch = useAppDispatch();

  const parameters = {
    "?q": searchValue,
    "+subject": category != "All" ? category : null,
    "&orderBy": sort,
    "&startIndex": currentPage,
  };

  function buildQueryString(params: any) {
    let queryString = "";

    for (const key in params) {
      const value = params[key];

      if (!value) continue;

      queryString += `${key}=${value}`;
    }

    return queryString;
  }

  const queryString = buildQueryString(parameters);

  console.log(queryString);

  useEffect(() => {
    if (!searchValue) return;

    dispatch(fetchBooks({ queryString }));

    window.scrollTo(0, 0);
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
