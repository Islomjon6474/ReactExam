import React, { useContext, useRef } from "react";

import "./qoshish.css";
import { NavLink } from "react-router-dom";

import { faEdit, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarText,
} from "reactstrap";
import Header from "../Header/Header";
import ProductContext from "../../contexts/ProductContexts";

function Qoshish(props) {
  const { products, setProducts } = useContext(ProductContext);

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
  // {
  //   url: "https://www.cnet.com/a/img/iJxo9AIxiXHqVoqm6nGISKtKwPI=/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg",
  //   id: 12,
  //   prodName: "Modern lamp study",
  //   price: "$135",
  // },
  function handleAdd() {
    const obj = {
      url: img.current.value,
      id: products.length + 1,
      prodName: name.current.value,
      price: price.current.value,
    };
    const t = products;
    t.push(obj);
    setProducts(t);
  }
  return (
    <>
      <Header text="Qo'shish" />

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
              <button>Ortga qaytish</button>
            </NavLink>
            <NavLink to="/">
              <button onClick={() => handleAdd()}>Saqlash</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Qoshish;
