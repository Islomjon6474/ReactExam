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

import React, { useContext, useRef } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Header from "../Header/Header";
import ProductContext from "../../contexts/ProductContexts";

function Ozgartirish(props) {
  const params = useParams();
  const { products, setProducts } = useContext(ProductContext);

  const navigate = useNavigate();

  console.log(params);

  const img = useRef();
  const name = useRef();
  const price = useRef();

  const inputs = [
    {
      name: "img",
      placeholder: "Maxsulot rasmi",
      ref: img,
    },
    {
      name: "prodname",
      placeholder: "Maxsulot rasmi",
      ref: name,
    },
    {
      name: "price",
      placeholder: "Maxsulot rasmi",
      ref: price,
    },
  ];

  function handleEdit() {
    if (img.current.value != "") {
      products[params.id].url = img.current.value;
    }
    if (name.current.value != "") {
      products[params.id].prodName = name.current.value;
    }
    if (price.current.value != "") {
      products[params.id].price = price.current.value;
    }
    navigate(`/`);
  }

  return (
    <>
      <Header text="O'zgartirish" />
      <div>
        <div className="container">
          <div className="row">
            {inputs.map((item) => {
              return (
                <div className=" col-lg-6 col-md-12">
                  <input
                    type="text"
                    name={item.name}
                    required
                    className="w-100 my-2 rounded p-1 border-muted"
                    placeholder={item.placeholder}
                    ref={item.ref}
                  />
                </div>
              );
            })}
            <div className="col-12 editbtn">
              <NavLink to="/">
                <button className="dalateBtn">Ortga qaytish</button>
              </NavLink>

              <button onClick={() => handleEdit()} className="editbtn">
                Saqlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ozgartirish;
