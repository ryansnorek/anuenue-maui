import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";


export default function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}
