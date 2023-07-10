import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import styles from "./assets/styles/styles.module.scss";
import BookBlock from "./Components/BookBlock/BookBlock";

import { useSelector } from "react-redux";
import { BookItem } from "./Components/redux/slices/bookSlice";
import { RootState } from "./Components/redux/store";

const App: React.FC = () => {
  const { books } = useSelector((state: RootState) => state.book);

  const bookList = books.map((item: BookItem) => {
    let thumbnail =
      item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let title = item.volumeInfo.title;
    let authors = item.volumeInfo.authors;
    let categories = item.volumeInfo.categories;

    if (thumbnail != undefined) {
      return (
        <BookBlock
          key={item.id}
          thumbnail={thumbnail}
          title={title}
          authors={authors}
          categories={categories}
        />
      );
    }
  });

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>{bookList}</div>
    </div>
  );
};

export default App;
