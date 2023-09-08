import React, { useEffect } from "react";

import styles from "./fullBook.module.scss";
import SpinnerItem from "../Spinner";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectBookData } from "../../redux/book/selectors";
import { fetchCurrentBook } from "../../redux/book/asyncActions";
import { clearSingleBook } from "../../redux/book/book";

const FullBook: React.FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { singleBook } = useAppSelector(selectBookData);

  const getSingleBook = () => {
    dispatch(fetchCurrentBook({ id }));
  };

  useEffect(() => {
    getSingleBook();
    return () => {
      dispatch(clearSingleBook());
    };
  }, []);

  const thumbnail = singleBook?.volumeInfo.imageLinks.smallThumbnail;
  const title = singleBook?.volumeInfo.title;
  const authors = singleBook?.volumeInfo.authors;
  const categories = singleBook?.volumeInfo.categories;
  const description = singleBook?.volumeInfo.description;

  if (!singleBook) {
    return <SpinnerItem />;
  }
  
  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <img src={thumbnail} />
      </div>
      <div className={styles.block}>
        <h3>{categories}</h3>
        <h3 className={styles.title}>{title}</h3>
        <h3 className={styles.author}>{authors}</h3>
        <div className={styles.desc}>{description}</div>
      </div>
    </div>
  );
};
export default FullBook;
