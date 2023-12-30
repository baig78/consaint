import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/containt_white.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light mt-5 p-5">
        <Container>
          <Row>
            <Col md={4}>
              {/* <h4>Contact Us</h4> */}
              <img
                src={logo}
                alt="Section 1"
                className="img-fluid footer-image mb-3"
              />
              {/* <p>This is the content of Section 1.</p> */}
            </Col>
            <Col md={4} className="text-center">
              <h4>Contact Us</h4>
              <ul className="list-unstyled d-flex flex-column">
                <i class="fas fa-envelope mb-2">
                  <span>info@consaint.ai</span>
                </i>
                <i class="fas fa-phone mb-2">
                  <span>81234556789</span>
                </i>
                <i class="fas fa-tty mb-2">
                  <span>81234556789</span>
                </i>
              </ul>
            </Col>
            <Col md={4} className="text-center">
              <h4>About Us</h4>
              <ul className="list-unstyled d-flex flex-column">
                <i class="fas fa-caret-right mb-2">
                  <span>info@consaint.ai</span>
                </i>
                <i class="fas fa-caret-right mb-2">
                  <span>81234556789</span>
                </i>
                <i class="fas fa-caret-right mb-2">
                  <span>81234556789</span>
                </i>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
