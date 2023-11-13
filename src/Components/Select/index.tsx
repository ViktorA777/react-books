import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from "./button.module.scss";

type SelectProps = {
   selectList: string[];
   onChangeSelect: Function;
   title: string;
 };

export const Select: React.FC<SelectProps> = ({
  selectList,
  onChangeSelect,
  title,
}) => {
  const list = selectList.map((item, i) => {
    return (
      <Dropdown.Item
        key={i}
        eventKey="1"
        onClick={() => onChangeSelect(item)}
        className={title === item ? "active" : ""}
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
        title={title}
        className={styles.block}
      >
        {list}
      </DropdownButton>
    </>
  );
};
