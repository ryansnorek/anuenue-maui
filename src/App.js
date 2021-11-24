import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";


export default function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Home/>}/>
          <Route path="/login" />
          <Route path="/register" />
          <Route path="/bag" />
          <Route path="/about" />
        </Routes>
      </div>
    </div>
  );
}
