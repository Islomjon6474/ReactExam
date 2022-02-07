import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Maxsulotlar from "./components/maxsulotlar/Maxsulotlar";
import Qoshish from "./components/qoshish/Qoshish";
import Ozgartirish from "./components/ozgartirish/Ozgartirish";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Maxsulotlar /> */}

      <Routes>
        <Route path="/" element={<Maxsulotlar />} />
        <Route path="/add" element={<Qoshish />} />
        <Route path="/edit" element={<Ozgartirish />} />
      </Routes>
    </div>
  );
}

export default App;
