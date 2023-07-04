import styles from "./book.module.scss";

const BookBlock = () => {
  return (
    <div className={styles.root}>
      <div>
        <img
          className={styles.img}
          src="https://avatars.mds.yandex.net/get-mpic/3584542/img_id4411893692140145346.jpeg/orig"
        />
      </div>
      <div className={styles.block}>
        <span className={styles.genre}>Биография</span>
        <span className={styles.title}>Богатый папа, бедный папа</span>
        <span className={styles.autor}>Роберт Киосаки</span>
      </div>
    </div>
  );
};
export default BookBlock;
