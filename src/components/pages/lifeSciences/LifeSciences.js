import React from "react";
import { Container } from "react-bootstrap";
import administraionImage from "../../../assets/admin_image.png";

const LifeSciences = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Life Sciences</div>
      </div>
      <Container>
        <p style={{ margin: "50px" }}>
          Consaint provides life science organizations to go beyond process
          optimization for the future bold vision to design and implement
          enterprise wide, scalable, sustainable transformations to meet unique
          needs.
        </p>
      </Container>
    </>
  );
};

export default LifeSciences;
