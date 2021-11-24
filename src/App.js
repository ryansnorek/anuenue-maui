import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Bag from "./components/Bag";
import About from "./components/About";
import Footer from "./components/Footer";


export default function App() {
  const [bag, setBag] = useState([]);

  return (
    <div className="wrapper">
      <Header bag={bag}/>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home bag={bag} setBag={setBag}/>}/>
          <Route path="/shop" element={<Home bag={bag} setBag={setBag}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/bag" element={<Bag/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}
