import React, { useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import styles from "./assets/styles/styles.module.scss";

import FullBook from "./Components/FullBook/FullBoox";
import QuantityBooks from "./Components/QuantityBooks/QuantityBooks";
import PageButton from "./Components/Buttons/PageButton";
import MainPage from "./Components/MainPage/MainPage";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <QuantityBooks />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/book/:id" element={<FullBook />} />
      </Routes>
    </div>
  );
};

export default App;
