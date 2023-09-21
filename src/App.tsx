import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainPage } from "./components/MainPage";
import { Book } from "./components/Book";
import { Error } from "./components/Error";
import { useAppSelector } from "./redux/store";
import { selectBookData } from "./redux/book/selectors";

const App: React.FC = () => {
  const { errorMessage } = useAppSelector(selectBookData);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/error" element={<Error errorMessage={errorMessage} />} />
      </Routes>
    </div>
  );
};

export default App;
