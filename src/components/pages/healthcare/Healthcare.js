import React from "react";
import { Container } from "react-bootstrap";
import administraionImage from "../../../assets/admin_image.png";

const Healthcare = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Healthcare</div>
      </div>
      <Container>
        <p style={{ margin: "50px" }}>
          Consaint creates business value by adopting rapid change in the health
          care industry. We understand our client, business needs and clinical
          process to help expertise and seize the change-driven across the
          health care chain to provide bright future to you and patients who
          depended on you.
        </p>
      </Container>
    </>
  );
};

export default Healthcare;
