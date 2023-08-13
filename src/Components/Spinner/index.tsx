import Spinner from "react-bootstrap/Spinner";
import styles from "./spinner.module.scss";

function SpinnerItem() {
  return (
    <div className={styles.spinner}>
      <Spinner animation="border" />
    </div>
  );
}

export default SpinnerItem;
