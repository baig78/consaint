import React from "react";
import logo from "../../assets/containt_white.png";

const Footer = () => {
  return (
    <>
      <div
        className="d-flex flex-wrap text-light bg-dark justify-content-around"
        style={{ background: "rgb(0, 108, 183)", padding: "30px" }}
      >
        <div>
          {/* <h4>Contact Us</h4> */}
          <img
            src={logo}
            alt="Section 1"
            className="img-fluid footer-image mb-3"
          />
          {/* <p>This is the content of Section 1.</p> */}
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul className="list-unstyled d-flex flex-column">
            <div className="d-flex">
              <i class="fas fa-envelope mb-2"></i>
              <span>info@consaint.ai</span>
            </div>
            <div className="d-flex">
              <i class="fas fa-phone mb-2"></i>
              <span>81234556789</span>
            </div>
            <div className="d-flex">
              <i class="fas fa-tty mb-2"></i>
              <span>81234556789</span>
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
              <span>Why Us</span>
            </div>
            <div className="d-flex">
              <i class="fas fa-caret-right mb-2 "></i>
              <span>Request a Service</span>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
