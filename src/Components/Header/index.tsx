import React from "react";

import { Select } from "../Select";
import { Search } from "../Search";
import styles from "./header.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  selectFilterCategory,
  selectFilterSort,
} from "../../redux/filter/selectors";
import { setSort, setCategory } from "../../redux/filter/filter";

export const Header: React.FC = () => {
   
  const sortList = ["Relevance", "Newest"];

  const categoryList = [
    "All",
    "Art",
    "Biography",
    "Computers",
    "History",
    "Medical",
    "Poetry",
  ];

  const ChangeSelectSort = (item: string) => {
    dispatch(setSort(item));
  };

  const ChangeSelectCategory = (item: string) => {
    dispatch(setCategory(item));
  };

  const dispatch = useAppDispatch();

  const sort = useAppSelector(selectFilterSort);

  const category = useAppSelector(selectFilterCategory);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.h1}>Search for Books</h1>
          <Search />
          <div className={styles.block}>
            <div className={styles.root}>
              <b>Caterories</b>
            </div>
            <Select
              selectList={categoryList}
              onChangeSelect={ChangeSelectCategory}
              title={category}
            />
            <b className={styles.sort}>Sorting by</b>
            <Select
              selectList={sortList}
              onChangeSelect={ChangeSelectSort}
              title={sort}
            />
          </div>
        </div>
      </div>
    </>
  );
};
