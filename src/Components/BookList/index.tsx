import { useSelector } from "react-redux";
import { selectBookData } from "../../redux/book/selectors";
import { Link } from "react-router-dom";
import { BookBlock } from "../BookBlock";
import styles from "../../assets/styles/styles.module.scss";
import Pagination from "../Pagination";
import { BookItem } from "../../components/types";
import { SpinnerItem } from "../Spinner";

export const BookList: React.FC = () => {
  const { books, status } = useSelector(selectBookData);

  const bookList = books.map((item: BookItem) => {
    const thumbnail =
      item.volumeInfo?.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    const title = item.volumeInfo.title;
    const authors = item.volumeInfo.authors;
    const categories = item.volumeInfo.categories;

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

  const button = bookList.length > 1 ? <Pagination /> : "";

  return (
    <>
      {status === "loading" ? (
        <SpinnerItem />
      ) : (
        <>
          <div className={styles.wrapper}>{bookList}</div>
          <div className={styles.root}>{button}</div>
        </>
      )}
    </>
  );
};
