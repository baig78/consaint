import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/consaint_site_logo.png";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const services = [
    "Administraion and Deployment",
    "Staffing and Training",
    "Cloud Solutions",
    "Data Management",
    "Business Intelligence",
    "Data Science and Artificial Intelligence",
    "Integration",
  ];
  const Industries = [
    "Banking and Capital Markets",
    "Healthcare",
    "Insurance",
    "Life Sciences",
    "Telecom",
  ];

  return (
    <Navbar expand="lg" sticky="top" className="shadow p-3 mb-5 bg-body ">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="site-logo" alt="consaint" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <li>Home</li>
            </Link>

            <NavDropdown title="Service" id="basic-nav-dropdown">
              {services.map((service, index) => (
                <NavDropdown.Item key={index}>{service}</NavDropdown.Item>
              ))}
            </NavDropdown>

            <NavDropdown title="Industries" id="basic-nav-dropdown">
              {Industries.map((Industries, index) => (
                <NavDropdown.Item key={index}>{Industries}</NavDropdown.Item>
              ))}
            </NavDropdown>
            <Link
              to="/carrier"
              className={`nav-link ${
                location.pathname === "/carrier" ? "active" : ""
              }`}
            >
              <li>Carrier</li>
            </Link>
            <Link
              to="/news"
              className={`nav-link ${
                location.pathname === "/news" ? "active" : ""
              }`}
            >
              <li>News</li>
            </Link>
            <Link
              to="/company"
              className={`nav-link ${
                location.pathname === "/company" ? "active" : ""
              }`}
            >
              <li>Company</li>
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <li>Contact Us</li>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
