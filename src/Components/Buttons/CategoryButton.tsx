import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import styles from "./sort.module.scss";
import { useState } from "react";

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
  const [active, setActive] = useState(0);

  const list = categoryList.map((item, i) => {
    return (
      <Dropdown.Item
        onClick={() => setActive(i)}
        className={active === i ? "active" : ""}
        key={i}
        eventKey="4"
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
