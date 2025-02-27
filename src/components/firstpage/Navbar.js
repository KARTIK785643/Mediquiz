import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"; // ✅ Corrected path

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MediQuiz</h1>
      <ul className="nav-links">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/about" className="nav-item">About</Link></li>
        <li><Link to="/Profile" className="nav-item">Profile</Link></li>
        <li><Link to="/register" className="nav-item">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
