import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/filter/filter";
import { useAppSelector } from "../../redux/store";
import { selectFilter } from "../../redux/filter/selectors";
import { selectBookData } from "../../redux/book/selectors";

export default function BasicPagination() {
  const dispatch = useDispatch();

  const { currentPage } = useAppSelector(selectFilter);

  const { totalBooks } = useAppSelector(selectBookData);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const count = Math.ceil(totalBooks / 32);

  return (
    <Stack spacing={2}>
      <Pagination
        onChange={(_, page) => onChangePage(page)}
        count={count}
        size="large"
        page={currentPage}
      />
    </Stack>
  );
}
