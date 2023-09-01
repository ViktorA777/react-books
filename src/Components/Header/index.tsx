import CategoryButton from "../Button/CategoryButton";
import SortButton from "../Button/SortButton";

import React from "react";
import Search from "../Search";
import styles from "./header.module.scss";

const Header: React.FC = () => {
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
            <CategoryButton />
            <b className={styles.sort}>Sorting by</b>
            <SortButton />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
