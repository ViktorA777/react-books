import styles from "../Header/header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";

const QuantityBooks = () => {
  const { totalBooks } = useSelector((state: RootState) => state.book);

  return (
    <div className={styles.find}>
      <span className={styles.span}>Найдено {totalBooks} книг</span>
    </div>
  );
};
export default QuantityBooks;
