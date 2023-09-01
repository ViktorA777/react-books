import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./Components/MainPage";
import FullBook from "./Components/Book";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/book/:id" element={<FullBook />} />
      </Routes>
    </div>
  );
};

export default App;
