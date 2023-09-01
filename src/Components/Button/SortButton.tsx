import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from "./button.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../redux/filter/filter";
import { selectFilterSort } from "../../redux/filter/selectors";

const SortButton: React.FC = () => {
  const sortList = ["Relevance", "Newest"];

  const dispatch = useDispatch();

  const sort = useSelector(selectFilterSort);

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
};

export default SortButton;
