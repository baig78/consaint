import React from "react";
import { Container } from "react-bootstrap";
import administraionImage from "../../../assets/admin_image.png";

const DataScienceArtificialIntelligence = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Data Science and Artificial Intelligence</div>
      </div>
      <Container>
        <p style={{ margin: "50px" }}>
          As the world becomes increasingly intelligent and the entire value
          chain is transformed, data is essential source of understanding and
          insights. Data alone is not enough; it must be reliable and should
          know how to use it. <br /> <br />
          We at Consaint help our customers and partners to enable them to take
          advantage of transformative power of data and artificial intelligence
          (AI) and generative AI(GenAI). By becoming data powered enterprises
          can adapt to the changing world and achieve sustainable competitive
          advantage.
        </p>
      </Container>
    </>
  );
};

export default DataScienceArtificialIntelligence;
