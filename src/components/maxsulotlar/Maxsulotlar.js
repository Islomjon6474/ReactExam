import React, { useContext } from "react";
// import algorismic from "../Assets/image1.png";
import { useState, useEffect } from "react";
import {
  faEdit,
  faPlus,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarText,
} from "reactstrap";
import "./maxsulotlar.css";
import Header from "../Header/Header";
import ProductContext from "../../contexts/ProductContexts";

function Maxsulotlar(props) {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(ProductContext);
  const handleDelete = (id) => {
    const filteredProds = products.filter((item) => item.id !== id);

    // console.log(img.splice(index, 1));
    // console.log(index);
    // console.log("ishladi");
    // const data = img.splice(index, 1);
    setProducts(filteredProds);
  };

  return (
    <div>
      <Header text="Maxsulotlar" />
      <NavLink to="/add">
        <button className="plusButton bg-white p-4">
          <FontAwesomeIcon icon={faPlus} className="" />
        </button>
      </NavLink>

      <div className="container">
        <div className="row my-5">
          {products.map((item, index) => {
            console.log("map ishladi");

            return (
              <div className="col-lg-3 col-md-6 col-sm-12 cardItem">
                <img className="w-100 h-100 image" src={item.url} alt="" />
                <div className="buttons">
                  <button
                    onClick={() => navigate(`edit/${index}`)}
                    className="edit"
                  >
                    <FontAwesomeIcon icon={faEdit} className="" />
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="delete"
                    //    onClick={handleDelete(index)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      //   actions={actions}
                    />
                  </button>
                </div>
                <div className="info">
                  <h3>{item.prodName}</h3>
                  <p className="text-muted">{item.price}</p>
                </div>
              </div>
            );
          })}
          <div className="col-lg-12 line my-5"></div>
          <div className="col-lg-12 algorismic">
            <img
              className="algo"
              src="https://mir-s3-cdn-cf.behance.net/projects/max_808/3e466b97826811.Y3JvcCw5OTksNzgyLDAsOTY.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maxsulotlar;
