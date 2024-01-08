import React from "react";
import { Container } from "react-bootstrap";
import administraionImage from "../../../assets/admin_image.png";

const BusinessProcessManagement = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Business Process Management</div>
      </div>
      <Container>
        <p style={{ margin: "50px" }}>
          By fostering collaboration and communication among team members, BPM
          tools promote a more agile and responsive approach to process
          management, aligning activities with organizational goals.
          <br /> <br />
          The implementation of BPM tools contributes to improved
          decision-making, reduced operational costs, and enhanced customer
          satisfaction, making them integral components for organizations
          seeking to optimize their business processes.
        </p>
      </Container>
    </>
  );
};

export default BusinessProcessManagement;
