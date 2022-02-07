import React from "react";
// import algorismic from "../Assets/image1.png";
import { useState, useEffect } from "react";
import {
  faEdit,
  faPlus,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarText,
} from "reactstrap";
import "./maxsulotlar.css";

function Maxsulotlar(props) {
  const [img, setImg] = useState([
    {
      url: "https://www.cnet.com/a/img/iJxo9AIxiXHqVoqm6nGISKtKwPI=/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg",
      id: 1,
      prodName: "Modern lamp study",
      price: "$135",
    },
    {
      url: "https://www.cnet.com/a/img/iJxo9AIxiXHqVoqm6nGISKtKwPI=/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg",
      id: 2,
      prodName: "Modern lamp study",
      price: "$135",
    },
    {
      url: "https://www.cnet.com/a/img/iJxo9AIxiXHqVoqm6nGISKtKwPI=/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg",
      id: 3,
      prodName: "Modern lamp study",
      price: "$135",
    },
    {
      url: "https://www.cnet.com/a/img/iJxo9AIxiXHqVoqm6nGISKtKwPI=/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg",
      id: 4,
      prodName: "Modern lamp study",
      price: "$135",
    },
    {
      url: "https://www.cnet.com/a/img/iJxo9AIxiXHqVoqm6nGISKtKwPI=/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg",
      id: 5,
      prodName: "Modern lamp study",
      price: "$135",
    },
    {
      url: "https://www.cnet.com/a/img/iJxo9AIxiXHqVoqm6nGISKtKwPI=/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg",
      id: 6,
      prodName: "Modern lamp study",
      price: "$135",
    },
    {
      url: "https://www.cnet.com/a/img/iJxo9AIxiXHqVoqm6nGISKtKwPI=/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg",
      id: 7,
      prodName: "Modern lamp study",
      price: "$135",
    },
    {
      url: "https://www.cnet.com/a/img/iJxo9AIxiXHqVoqm6nGISKtKwPI=/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg",
      id: 8,
      prodName: "Modern lamp study",
      price: "$135",
    },
    {
      url: "https://www.cnet.com/a/img/iJxo9AIxiXHqVoqm6nGISKtKwPI=/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg",
      id: 9,
      prodName: "Modern lamp study",
      price: "$135",
    },
    {
      url: "https://www.cnet.com/a/img/iJxo9AIxiXHqVoqm6nGISKtKwPI=/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg",
      id: 10,
      prodName: "Modern lamp study",
      price: "$135",
    },
    {
      url: "https://www.cnet.com/a/img/iJxo9AIxiXHqVoqm6nGISKtKwPI=/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg",
      id: 11,
      prodName: "Modern lamp study",
      price: "$135",
    },
    {
      url: "https://www.cnet.com/a/img/iJxo9AIxiXHqVoqm6nGISKtKwPI=/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg",
      id: 12,
      prodName: "Modern lamp study",
      price: "$135",
    },
  ]);

  const handleDelete = (id) => {
    const filteredProds = img.filter((item) => item.id !== id);

    // console.log(img.splice(index, 1));
    // console.log(index);
    // console.log("ishladi");
    // const data = img.splice(index, 1);
    setImg(filteredProds);
  };

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
        <h1 className="maxsulotlar">Mahsulotlar</h1>
        <NavLink to="/add">
          <button className="plusButton bg-white p-4">
            <FontAwesomeIcon icon={faPlus} className="" />
          </button>
        </NavLink>
      </div>

      <div className="container">
        <div className="row my-5">
          {img.map((item, index) => {
            console.log("map ishladi");

            return (
              <div className="col-lg-3 col-md-6 col-sm-12 cardItem my-5">
                <img className="w-100 h-100 image" src={item.url} alt="" />
                <div className="buttons">
                  <NavLink to="/edit">
                    <button className="edit m-3">
                      <FontAwesomeIcon icon={faEdit} className="" />
                    </button>
                  </NavLink>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="delete"
                    //    onClick={handleDelete(index)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      //   actions={actions}
                      className=""
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
