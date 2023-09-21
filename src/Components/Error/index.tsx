import styles from "./error.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

type ErrorProps = {
  errorMessage: string | undefined;
};

export const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Произошла ошибка: {errorMessage}😕</h2>
      <p className={styles.text}>
        Попробуйте перезагрузить страницу или вернуться на главную
      </p>

      <Link to={"/"}>
        <Button variant="secondary">На Главную</Button>
      </Link>
    </div>
  );
};
