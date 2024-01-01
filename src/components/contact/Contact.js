import React from "react";
import administraionImage from "../../assets/admin_image.png";
import ContactForm from "../contactForm/ContactForm";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Contact Us</div>
      </div>

      <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
        <ContactForm />
      </Container>
    </>
  );
};

export default Contact;
