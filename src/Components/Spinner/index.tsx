import Spinner from "react-bootstrap/Spinner";
import styles from "./spinner.module.scss";

export const SpinnerItem = () => {
  return (
    <div className={styles.spinner}>
      <Spinner animation="border" />
    </div>
  );
};
