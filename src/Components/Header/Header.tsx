import Search from "../Search/Searh";
import SortButton from "../SortButton/SortButton";
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
            <SortButton />
            <b>Sorting by</b>
            <SortButton />
          </div>
        </div>
      </div>
      <div className={styles.find}>
        <span className={styles.span}>Найдено 453 книги</span>
      </div>
    </>
  );
};
export default Header;
