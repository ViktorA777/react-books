import React, { useEffect } from "react";

import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/filterSlice";
import { RootState } from "../../redux/store";

const PageButton: React.FC = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state: RootState) => state.filter);

  return (
    <>
      <Button
        onClick={() => dispatch(setCurrentPage(currentPage + 30))}
        variant="secondary"
      >
        Далее
      </Button>
    </>
  );
};

export default PageButton;
