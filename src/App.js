import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";


export default function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Home/>}/>
        <Route path="/login" />
        <Route path="/register" />
        <Route path="/bag" />
        <Route path="/about" />
      </Routes>
    </div>
  );
}
