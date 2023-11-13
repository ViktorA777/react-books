import styles from "../Header/header.module.scss";
import { selectBookData } from "../../redux/book/selectors";
import { useAppSelector } from "../../redux/store";

export  const QuantityBooks = () => {
  const { totalBooks } = useAppSelector(selectBookData);

  return (
    <div className={styles.find}>
      <span className={styles.span}>Найдено {totalBooks} книг</span>
    </div>
  );
};
