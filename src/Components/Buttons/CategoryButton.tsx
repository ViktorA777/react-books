import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import styles from "./sort.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../redux/slices/filterSlice";
import { RootState } from "../../redux/store";

const categoryList = [
  "All",
  "Art",
  "Biography",
  "Computers",
  "History",
  "Medical",
  "Poetry",
];

function SortButton() {
  const dispatch = useDispatch();

  const category = useSelector((state: RootState) => state.filter.category);

  const list = categoryList.map((item, i) => {
    return (
      <Dropdown.Item
        onClick={() => dispatch(setCategory(item))}
        key={i}
        eventKey="4"
        className={category === item ? "active" : ""}
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
        title={category}
        className={styles.block}
      >
        {list}
      </DropdownButton>
    </>
  );
}

export default SortButton;
