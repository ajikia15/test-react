import "./Navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleInput(e) {
    setSearch(e.target.value);
  }

  function handleSearch() {
    if (search.trim() !== "") navigate(`/search/${search}`);
  }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/vite.svg" alt="Logo" className="navbar-logo" />
        <span className="navbar-title">FakeStoreApp</span>
        <a href="/" className="navbar-link">
          Home
        </a>
        <Link to="/about" className="navbar-link bg-black">
          About
        </Link>
        <a href="#" className="navbar-link">
          Contact
        </a>
        <a href="#" className="navbar-link">
          Blog
        </a>
      </div>
      <div className="navbar-right">
        <div className="navbar-search-group">
          <input
            className="navbar-search"
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleInput}
          />
          <button className="navbar-search-btn" onClick={handleSearch}>
            🔍
          </button>
          <Link
            to={search.trim() !== "" ? `/search/${search}` : "#"}
            className="navbar-search-btn"
          >
            🔍
          </Link>
        </div>
      </div>
    </nav>
  );
}
