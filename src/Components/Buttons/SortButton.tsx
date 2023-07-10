import Dropdown from "react-bootstrap/Dropdown";

import styles from "./sort.module.scss";

function SortButton() {
  return (
    <>
      <Dropdown data-bs-theme="light">
        <Dropdown.Toggle
          className={styles.block}
          id="dropdown-button-dark-example1"
          variant="secondary"
        >
          Relevance
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">Relevance</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Newest</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default SortButton;
