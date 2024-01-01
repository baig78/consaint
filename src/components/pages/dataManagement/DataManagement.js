import React from "react";
import { Container } from "react-bootstrap";
import administraionImage from "../../../assets/admin_image.png";

const DataManagement = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Data Management</div>
      </div>
      <Container>
        <p style={{ margin: "50px" }}>
          Data management tools play a critical role in data governance,
          enabling organizations to define policies, enforce standards, and
          maintain a centralized repository for authoritative and accurate data.
        </p>
      </Container>
    </>
  );
};

export default DataManagement;
