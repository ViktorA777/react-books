import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./fullBook.module.scss";
import SpinnerItem from "../Spinner";

type SingleBookItem = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string;
    description: string;
    categories: string[];
    imageLinks: {
      smallThumbnail: string;
    };
  };
};

const FullBook: React.FC = () => {
  const [book, setBook] = useState<SingleBookItem>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchBook() {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyAxkRWaihssmxEyS2QOr1hVa7kIHe8jT1g`
        );
        setBook(data);
      } catch (error) {
        alert("Книга не найдена");
      }
    }
    fetchBook();
  }, []);

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
