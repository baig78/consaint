import React from "react";
import logo from "../../assets/containt_white.png";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div
        className="d-flex flex-wrap text-light bg-dark justify-content-around"
        style={{ background: "rgb(0, 108, 183)", padding: "30px" }}
      >
        <div>
          {/* <h4>Contact Us</h4> */}
          <Link to="/">
            <img
              src={logo}
              alt="Section 1"
              className="img-fluid footer-image mb-3"
            />
          </Link>
          {/* <p>This is the content of Section 1.</p> */}
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul className="list-unstyled d-flex flex-column">
            <div className="d-flex">
              <i class="fas fa-envelope mb-2"></i>
              <a
                className="text-decoration-none text-light"
                href="mailto:info@consaint.ai"
              >
                <span>info@consaint.ai</span>
              </a>
            </div>
            <div className="d-flex">
              <i class="fas fa-phone mb-2"></i>
              <a
                className="text-decoration-none text-light"
                href="tel:123-456-7890"
              >
                <span>123-456-7890</span>
              </a>
            </div>
            <div className="d-flex">
              <i class="fas fa-tty mb-2"></i>
              <a
                className="text-decoration-none text-light"
                href="tel:123-456-7890"
              >
                <span>123-456-7890</span>
              </a>
            </div>
          </ul>
        </div>
        <div>
          <h4>About Us</h4>
          <ul className="list-unstyled d-flex flex-column">
            {/* <i class="fas fa-caret-right mb-2">
              <span>info@consaint.ai</span>
            </i> */}
            <div className="d-flex">
              <i class="fas fa-caret-right mb-2"></i>
              <Link
                to="/company"
                className="text-decoration-none text-light"
                style={{ cursor: "pointer" }}
              >
                <span>Why Us</span>
              </Link>
            </div>
            <div className="d-flex">
              <i class="fas fa-caret-right mb-2 "></i>
              <Link
                className="text-decoration-none text-light"
                style={{ cursor: "pointer" }}
                to="/contact"
              >
                <span>Request a Service</span>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
