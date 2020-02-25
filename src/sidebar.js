import React from "react";
import { slide as Menu } from "react-burger-menu";
import Button from 'react-bootstrap/Button';
import {List, XSquare, ChevronLeft, InfoSquare} from 'react-bootstrap-icons'


export default props => {
  return (
    // Pass on our props
    <Menu customBurgerIcon={ <Button variant="secondary">
          <List color="ghostwhite" size={25}/></Button> } >
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

