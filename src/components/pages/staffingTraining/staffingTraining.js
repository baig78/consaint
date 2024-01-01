import React from "react";
import { Container } from "react-bootstrap";
import administraionImage from "../../../assets/admin_image.png";

const staffingTraining = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Staffing and Training</div>
      </div>
      <Container>
        <p style={{ margin: "50px" }}>
          Consaint IT staffing involves understanding the unique requirements of
          each project or position, matching the right skill sets, and providing
          ongoing support to ensure optimal performance. <br /> <br />
          Consaint Training programs cover a broad spectrum, including
          programming languages, cloud computing, cybersecurity, data science,
          and project management, catering to diverse roles within the sector.
        </p>
      </Container>
    </>
  );
};

export default staffingTraining;
