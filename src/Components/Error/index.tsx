import styles from "./error.module.scss";

const Error = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Произошла ошибка запроса😕</h2>
      <p className={styles.text}>Попробуйте перезагрузить страницу</p>
    </div>
  );
};
export default Error;
