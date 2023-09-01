import { fetchBooks } from "../../redux/book/asyncActions";
import { selectBookData } from "../../redux/book/selectors";
import { selectFilter } from "../../redux/filter/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const useBookService = () => {
  const { searchValue } = useAppSelector(selectBookData);

  const { category, sort, currentPage } = useAppSelector(selectFilter);

  const dispatch = useAppDispatch();

  const getBooks = () => {
    const categoryId = category != "All" ? `+subject:${category}` : "";

    const search = `?q=${searchValue}`;

    const sortPick = `&orderBy=${sort}`;

    const pagination = `&startIndex=${currentPage}`;

    dispatch(fetchBooks({ search, categoryId, sortPick, pagination }));

    window.scrollTo(0, 0);
  };

  return { getBooks };
};

export default useBookService;
