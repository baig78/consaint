import React from "react";
import administraionImage from "../../../assets/admin_image.png";
import { Container } from "react-bootstrap";

const AdministraionDeployment = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Administraion and Deployment</div>
      </div>
      <Container>
        <p style={{ margin: "50px" }}>
          Consaint’s are expertise in integrating solutions that automates the
          process of integrating code changes and deploy them to higher
          environments. Our experienced team enables design and development of
          pipelines which automatically trigger build and running automated test
          cases to ensure the stability and reliability of the application.
        </p>
      </Container>
    </>
  );
};

export default AdministraionDeployment;
