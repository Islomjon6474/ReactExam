import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarText,
} from "reactstrap";

import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <div className="container">
        <Navbar color="white" expand="md" light>
          <NavbarBrand className="furnitlogo" href="/">
            Furniutr.
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar></Nav>
            <FontAwesomeIcon icon={faSearch} className="me-2" />
          </Collapse>
        </Navbar>

        <h3 className="p-5">
          Barchasini ko’rish / qo’shish / o’zgartirish / o’chirish paneli
        </h3>
        <h1 className="maxsulotlar">{props.text}</h1>
      </div>
    </div>
  );
}

export default Header;
