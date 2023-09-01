import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/filter/filter";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/store";

export default function BasicPagination() {
  const dispatch = useDispatch();

  const { currentPage } = useAppSelector((state: RootState) => state.filter);

  const onChangePage = () => {
    dispatch(setCurrentPage(currentPage + 30));
  };

  return (
    <Stack spacing={2}>
      <Pagination onChange={onChangePage} count={22} size="large" />
    </Stack>
  );
}
