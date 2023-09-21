import React from "react";
import styles from "./book.module.scss";
import { BookItemProps } from "../../components/types";


export const BookBlock: React.FC<BookItemProps> = ({
  thumbnail,
  title,
  authors,
  categories,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.root}>
        <div className={styles.imgBlock}>
          <img className={styles.img} src={thumbnail} />
        </div>
        <div className={styles.block}>
          <span className={styles.genre}>{categories}</span>
          <span className={styles.title}>{title}</span>
          <span className={styles.author}>{authors}</span>
        </div>
      </div>
    </div>
  );
};


