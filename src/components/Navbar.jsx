import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">YogaFit</h1>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tutorials">Tutorials</Link></li>
        <li><Link to="/about">About Us</Link></li> 
        <li><Link to="/contact">Contact</Link></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
