import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Maxsulotlar from "./components/Maxsulotlar/Maxsulotlar";
import Qoshish from "./components/Qoshish/Qoshish";
import Ozgartirish from "./components/Ozgartirish/Ozgartirish";
import { Route, Routes } from "react-router-dom";
import ProductContext from "./contexts/ProductContexts";

function App() {
  const [products, setProducts] = useState([
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

  return (
    <div className="App">
      {/* <Maxsulotlar /> */}

      <ProductContext.Provider value={{ products, setProducts }}>
        <Routes>
          <Route path="/" element={<Maxsulotlar />} />
          <Route path="/add" element={<Qoshish />} />
          <Route path="/edit/:id" element={<Ozgartirish />} />
        </Routes>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
