import BookBlock from "../BookBlock";

import styles from "../../assets/styles/styles.module.scss";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { BookItem } from "../../redux/book/types";
import { RootState } from "../../redux/store";
import Pagination from "../Pagination/index";
import QuantityBooks from "../QuantityBooks";
import Header from "../Header";

const MainPage: React.FC = () => {
  const { books } = useSelector((state: RootState) => state.book);

  const bookList = books.map((item: BookItem) => {
    let thumbnail =
      item.volumeInfo?.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let title = item.volumeInfo.title;
    let authors = item.volumeInfo.authors;
    let categories = item.volumeInfo.categories;

    if (thumbnail != undefined) {
      return (
        <Link to={`/book/${item.id}`}>
          <BookBlock
            key={item.id}
            thumbnail={thumbnail}
            title={title}
            authors={authors}
            categories={categories}
          />
        </Link>
      );
    }
  });

  let button = bookList.length > 1 ? <Pagination /> : "";

  return (
    <>
      <Header />
      <QuantityBooks />
      <>
        <div className={styles.wrapper}>{bookList}</div>
        <div className={styles.root}>{button}</div>
      </>
    </>
  );
};
export default MainPage;
