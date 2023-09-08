import QuantityBooks from "../QuantityBooks";
import Header from "../Header";
import BookList from "../BookList/BookList";
import Error from "../Error";
import { selectBookData } from "../../redux/book/selectors";
import { useAppSelector } from "../../redux/store";


const MainPage = () => {
  const { status } = useAppSelector(selectBookData);

  return (
    <>
      <Header />
      <QuantityBooks />
      {status === "error" ? <Error /> : <BookList />}
    </>
  );
};
export default MainPage;
