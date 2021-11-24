import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Bag from "./components/Bag";
import About from "./components/About";


export default function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/bag" element={<Bag/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </div>
  );
}
