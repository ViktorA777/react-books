import React from "react";

import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/filter/filter";
import { selectFilter } from "../../redux/filter/selectors";

const PageButton: React.FC = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector(selectFilter);

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
