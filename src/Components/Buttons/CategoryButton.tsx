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
          All
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">All</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Art</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Biography</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Computers</Dropdown.Item>
          <Dropdown.Item href="#/action-5">History</Dropdown.Item>
          <Dropdown.Item href="#/action-6">Medical</Dropdown.Item>
          <Dropdown.Item href="#/action-7">Poetry</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default SortButton;
