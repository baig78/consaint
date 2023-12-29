import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <h3 className="logo">Logo</h3>

      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/service">
          <li>Service</li>
        </Link>
        <Link to="/industries">
          <li>Industries</li>
        </Link>
        <Link to="/carrier">
          <li>Carrier</li>
        </Link>
        <Link to="/news">
          <li>News</li>
        </Link>
        <Link to="/company">
          <li>Company</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
