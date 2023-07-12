import React from "react";
import styles from "./book.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SpinnerItem from "../Spinner";

type BookItemProps = {
  thumbnail: string;
  title: string;
  authors: string;
  categories: string;
};

const BookBlock: React.FC<BookItemProps> = ({
  thumbnail,
  title,
  authors,
  categories,
}) => {
  const { status } = useSelector((state: RootState) => state.book);

  return (
    <>
      {status === "error" ? (
        <div>Ошибка поиски, книги по данному запросу не найдены...</div>
      ) : (
        <>
          {status === "loading" ? (
            <SpinnerItem />
          ) : (
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
          )}
        </>
      )}
    </>
  );
};
export default BookBlock;
