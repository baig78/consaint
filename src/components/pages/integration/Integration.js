import React from "react";
import { Container } from "react-bootstrap";
import administraionImage from "../../../assets/admin_image.png";

const Integration = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Integration</div>
      </div>
      <Container>
        <p style={{ margin: "50px" }}>
          SOA encourages the reuse of services, minimizing redundancy and
          lowering development costs. Business owners can leverage existing
          services to build new applications, resulting in significant time and
          resource savings.
        </p>
      </Container>
    </>
  );
};

export default Integration;
