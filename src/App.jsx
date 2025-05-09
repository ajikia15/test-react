import "./App.css";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import Postpage from "../Pages/Postpage";
import Navbar from "./Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Postpage />} />
      </Routes>
    </>
  );
}

export default App;
