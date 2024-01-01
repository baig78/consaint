import React from "react";
import { Container } from "react-bootstrap";
import administraionImage from "../../../assets/admin_image.png";

const Insurance = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Insurance</div>
      </div>
      <Container>
        <p style={{ margin: "50px" }}>
          Consaint creates business value by adopting the change in the
          insurance industry. We understand our client, business needs to help
          expertise and seize the change-driven across the insurance value
          chain, from claims administration, policy administration, underwriting
          and customer experience via sophisticated technologies.
        </p>
      </Container>
    </>
  );
};

export default Insurance;
