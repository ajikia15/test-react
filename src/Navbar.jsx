import "./Navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import SignIn from "../Pages/SignIn";
import SignOutButton from "./SignOutButton";
export default function Navbar() {
  const { user } = useContext(UserContext);
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
        <Link to="/about" className="navbar-link">
          About
        </Link>

        {user ? (
          <Link to="/admin-dashboard" className="navbar-link">
            Dashboard
          </Link>
        ) : (
          <Link to="/sign-in" className="navbar-link">
            Sign in
          </Link>
        )}
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

          <Link
            to={search.trim() !== "" ? `/search/${search}` : "#"}
            className="navbar-search-btn"
          >
            🔍
          </Link>
        </div>
        {user && (
          <>
            <p>{user.email}</p>
            <SignOutButton />
          </>
        )}
      </div>
    </nav>
  );
}
