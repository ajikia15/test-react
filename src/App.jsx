import "./App.css";
import Home from "../Pages/Home";
import Navbar from "./Navbar";
import Postpage from "../Pages/Postpage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Postpage />} />
      </Routes>
    </>
  );
}

export default App;
