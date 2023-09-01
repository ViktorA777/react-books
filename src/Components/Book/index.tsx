import React from "react";

import styles from "./fullBook.module.scss";
import SpinnerItem from "../Spinner";
import { useBook } from "../../hooks/useBook";

const FullBook: React.FC = () => {
  const { book } = useBook();

  if (!book) {
    return <SpinnerItem />;
  }

  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <img src={book.volumeInfo.imageLinks.smallThumbnail} />
      </div>
      <div className={styles.block}>
        <h3>{book.volumeInfo.categories}</h3>
        <h3 className={styles.title}>{book.volumeInfo.title}</h3>
        <h3 className={styles.author}>{book.volumeInfo.authors}</h3>
        <div className={styles.desc}>{book.volumeInfo.description}</div>
      </div>
    </div>
  );
};
export default FullBook;
