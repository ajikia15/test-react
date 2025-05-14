import "./App.css";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import Postpage from "../Pages/Postpage";
import Navbar from "./Navbar";
import Searchpage from "../Pages/Searchpage";
import About from "../Pages/About";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Postpage />} />
        <Route path="/search/:term" element={<Searchpage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
