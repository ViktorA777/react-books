import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import styles from "./assets/styles/styles.module.scss";
import BookBlock from "./Components/BookBlock/BookBlock";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <BookBlock />
        <BookBlock />
        <BookBlock />
        <BookBlock />
      </div>
    </div>
  );
};

export default App;
