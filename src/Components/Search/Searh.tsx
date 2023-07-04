import styles from "./search.module.scss";
import search from "../../assets/icons/search.svg";

const Search: React.FC = () => {
  return (
    <div className={styles.block}>
      <img className={styles.img} src={search} />
      <input
        className={styles.input}
        type="text"
        placeholder="Enter the book"
      />
    </div>
  );
};
export default Search;
