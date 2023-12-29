import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/consaint_site_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="shadow p-3 mb-5 bg-body rounded"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="site-logo" alt="consaint" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link to="/" className="nav-link">
              <li>Home</li>
            </Link>
            <Link to="/service" className="nav-link">
              <li>Service</li>
            </Link>
            <Link to="/industries" className="nav-link">
              <li>Industries</li>
            </Link>
            <Link to="/carrier" className="nav-link">
              <li>Carrier</li>
            </Link>
            <Link to="/news" className="nav-link">
              <li>News</li>
            </Link>
            <Link to="/company" className="nav-link">
              <li>Company</li>
            </Link>
            <Link to="/contact" className="nav-link">
              <li>Contact Us</li>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
