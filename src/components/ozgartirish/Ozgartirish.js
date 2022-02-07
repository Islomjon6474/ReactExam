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

import React from "react";
import { NavLink } from "react-router-dom";

function Ozgartirish(props) {
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
      </div>
      <div>
        <h3 className="p-5">
          Barchasini ko’rish / qo’shish / o’zgartirish / o’chirish paneli
        </h3>
        <h1 className="maxsulotlar">O'zgartirish</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className=" col-lg-6 col-md-12">
            <input
              type="text"
              required
              className="w-100 my-2 rounded p-1 border-muted"
              placeholder="Maxsulot rasmi"
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <input
              type="text"
              required
              className="w-100 my-2  rounded p-1"
              placeholder="Maxsulot nomi"
            />
          </div>
          <div className="col-lg-6 col-md-12 my-2">
            <input
              type="text"
              required
              className="w-100  rounded p-1"
              placeholder="Maxsulot narxi"
            />
          </div>
          <div className="col-12 editbtn">
            <NavLink to="/">
              <button className="dalateBtn">Ortga qaytish</button>
            </NavLink>
            <NavLink to="/">
              <button className="editbtn">Saqlash</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ozgartirish;
