import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from "./sort.module.scss";
import { useState } from "react";

const sortList = ["Relevance ", "Newest"];

function SortButton() {
  const [active, setActive] = useState(0);

  const list = sortList.map((item, i) => {
    return (
      <Dropdown.Item
        className={active === i ? "active" : ""}
        key={i}
        eventKey="1"
        onClick={() => setActive(i)}
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
        title={list[active]}
        className={styles.block}
      >
        {list}
      </DropdownButton>
    </>
  );
}

export default SortButton;
