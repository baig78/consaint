import React from "react";
import { Container } from "react-bootstrap";
import administraionImage from "../../../assets/admin_image.png";

const CustomerRelationshipManagement = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Customer Relationship Management</div>
      </div>
      <Container>
        <p style={{ margin: "50px" }}>
          CRM tools contribute to improved customer satisfaction by enabling
          timely responses to inquiries, personalized marketing campaigns, and
          streamlined sales processes.
          <br /> <br />
          With analytics and reporting capabilities, CRM tools empower
          businesses to gain valuable insights into customer behaviors and
          preferences, supporting data-driven decision-making for enhanced
          business growth.
        </p>
      </Container>
    </>
  );
};

export default CustomerRelationshipManagement;
