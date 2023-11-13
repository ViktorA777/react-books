import { QuantityBooks } from "../QuantityBooks";
import { Header } from "../Header";
import { BookList } from "../BookList";
import { selectBookData } from "../../redux/book/selectors";
import { useAppSelector } from "../../redux/store";
import { Navigate } from "react-router-dom";
import React from "react";

export const MainPage: React.FC = () => {
  const { status } = useAppSelector(selectBookData);

  if (status === "error") {
    return <Navigate to="/error" />;
  }

  return (
    <>
      <Header />
      <QuantityBooks />
      <BookList />
    </>
  );
};
