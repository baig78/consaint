import React from "react";
import { Container } from "react-bootstrap";
import administraionImage from "../../../assets/admin_image.png";

const businessIntelligence = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Business Intelligence</div>
      </div>
      <Container>
        <p style={{ margin: "50px" }}>
          BI empowers organizations to identify patterns, trends, and
          correlations in their data, fostering a proactive approach to
          strategic planning and facilitating timely responses to market
          changes.
        </p>
      </Container>
    </>
  );
};

export default businessIntelligence;
