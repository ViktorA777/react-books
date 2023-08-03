import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from "./sort.module.scss";
import { useState } from "react";
import { RootState } from "../../redux/store";

import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";

const sortList = ["Relevance", "Newest"];

function SortButton() {
  const dispatch = useDispatch();

  const sort = useSelector((state: RootState) => state.filter.sort);

  const list = sortList.map((item, i) => {
    return (
      <Dropdown.Item
        key={i}
        eventKey="1"
        onClick={() => dispatch(setSort(item))}
      >
        {item}
      </Dropdown.Item>
    );
  });

  return (
    <>
      <DropdownButton
        data-bs-theme="dark"
        as={ButtonGroup}
        key="secondary"
        id="dropdown-variants-secondary"
        variant="secondary"
        title={sort}
        className={styles.block}
      >
        {list}
      </DropdownButton>
    </>
  );
}

export default SortButton;
