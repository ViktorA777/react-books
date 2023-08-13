import React from "react";

import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import FullBook from "./Components/FullBook";
import MainPage from "./Components/MainPage";

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
