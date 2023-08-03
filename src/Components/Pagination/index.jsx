import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/filterSlice";

export default function BasicPagination() {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.filter);

  const onChangePage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <Stack spacing={2}>
      <Pagination onChange={() => onChangePage()} count={22} size="large" />
    </Stack>
  );
}
