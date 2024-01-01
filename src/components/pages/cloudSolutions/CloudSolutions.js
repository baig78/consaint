import React from "react";
import { Container } from "react-bootstrap";
import administraionImage from "../../../assets/admin_image.png";

const CloudSolutions = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Cloud Solutions</div>
      </div>
      <Container>
        <p style={{ margin: "50px" }}>
          Leveraging cloud services allows businesses to reduce capital expenses
          associated with traditional on-premises infrastructure, promoting
          cost-efficiency and flexibility in resource allocation.
        </p>
      </Container>
    </>
  );
};

export default CloudSolutions;
