import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleInput(e) {
    setSearch(e.target.value);
    if (onSearch) onSearch(e.target.value);
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/vite.svg" alt="Logo" className="navbar-logo" />
        <span className="navbar-title">FakeStoreApp</span>
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <a href="#" className="navbar-link">
          About
        </a>
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
          <button className="navbar-search-btn" tabIndex={-1}>
            🔍
          </button>
        </div>
      </div>
    </nav>
  );
}
