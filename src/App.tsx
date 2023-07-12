import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import styles from "./assets/styles/styles.module.scss";
import BookBlock from "./Components/BookBlock/BookBlock";

import { useSelector } from "react-redux";
import { BookItem } from "./Components/redux/slices/bookSlice";
import { RootState } from "./Components/redux/store";
import FullBook from "./Components/FullBook/FullBoox";
import QuantityBooks from "./Components/QuantityBooks/QuantityBooks";

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
        <Link to={`/book/${item.id}`} key={item.id}>
          <BookBlock
            thumbnail={thumbnail}
            title={title}
            authors={authors}
            categories={categories}
          />
        </Link>
      );
    }
  });

  return (
    <div>
      <Header />
      <QuantityBooks />
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={bookList} />
          <Route path="/book/:id" element={<FullBook />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
