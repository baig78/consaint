import React from "react";
import { Container } from "react-bootstrap";
import administraionImage from "../../../assets/admin_image.png";

const BankingCapitalMarkets = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Banking and Capital Markets</div>
      </div>
      <Container>
        <p style={{ margin: "50px" }}>
          Being a critical sector Consaint creates business value by adopting
          and understanding client’s business needs to help expertise and seize
          the change-driven across the banking and finance in managing
          transactions, mitigating risks and ensuring regulatory compliance
          using sophisticated technologies.
        </p>
      </Container>
    </>
  );
};

export default BankingCapitalMarkets;
