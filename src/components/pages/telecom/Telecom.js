import React from "react";
import { Container } from "react-bootstrap";
import administraionImage from "../../../assets/admin_image.png";

const Telecom = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Telecom</div>
      </div>
      <Container>
        <p style={{ margin: "50px" }}>
          Consaint creates business value by providing solutions that integrate
          telecommunication to enable our clients to begin their 5G journey at
          the earliest now.
        </p>
      </Container>
    </>
  );
};

export default Telecom;
