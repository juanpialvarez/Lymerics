import React from "react";
import { Dropdown } from "semantic-ui-react";

const MenuComponent: React.FC = () => {
  return (
    <Dropdown item text='Menu'>
      <Dropdown.Menu>
        <Dropdown.Item>Home</Dropdown.Item>
        <Dropdown.Item>Stories</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MenuComponent;
