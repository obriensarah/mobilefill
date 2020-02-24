import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Disclaimer
      </a>

      <a className="menu-item" href="/">
        Preparing form for another person
      </a>

      <a className="menu-item" href="/">
        Qualification questions
      </a>

      <a className="menu-item" href="/">
        Address, phone and email of solicitor
      </a>
    </Menu>
  );
};

