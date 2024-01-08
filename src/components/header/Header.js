import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/consaint_site_logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const services = [
    {
      name: "Administraion and Deployment",
      link: "/administraion-and-deployment",
    },
    { name: "Staffing and Training", link: "/staffing-and-training" },
    { name: "Cloud Solutions", link: "/cloud-solutions" },
    { name: "Data Management", link: "/data-management" },
    { name: "Business Intelligence", link: "/business-intelligence" },
    {
      name: "Data Science and Artificial Intelligence",
      link: "/data-science-and-artificial-intelligence",
    },
    {
      name: "Business Process Management",
      link: "/business-process-management",
    },
    {
      name: "Customer Relationship Management",
      link: "/customer-relationship-management",
    },
    {
      name: "Integration",
      link: "/integration",
    },
  ];
  const Industries = [
    {
      name: "Banking and Capital Markets",
      link: "/banking-and-capital-markets",
    },
    {
      name: "Healthcare",
      link: "/healthcare",
    },
    {
      name: "Insurance",
      link: "/insurance",
    },
    {
      name: "Life Sciences",
      link: "/life-sciences",
    },
    {
      name: "Telecom",
      link: "/telecom",
    },
  ];

  return (
    <Navbar expand="lg" sticky="top" className="shadow p-3 bg-body ">
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
            <Link to="#" className="nav-link">
              <li>Services</li>
              <ul title="Service" id="basic-nav-dropdown">
                {services.map((service, index) => (
                  <Link to={service.link} key={index}>
                    {service.name}
                  </Link>
                ))}
              </ul>
            </Link>

            <Link to="#" className="nav-link">
              <li>Industries</li>
              <ul title="Service" id="basic-nav-dropdown">
                {Industries.map((Industries, index) => (
                  <Link to={Industries.link} key={index}>
                    {Industries.name}
                  </Link>
                ))}
              </ul>
            </Link>

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
