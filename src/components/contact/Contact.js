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
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <iframe
            title="Google Map"
            width="1100"
            height="450"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.8279684488457!2d-0.16600572415053727!3d51.42458671675071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876067335542423%3A0x3d2d50a25ef15e72!2sMitcham%20Rd%2C%20London%2C%20UK!5e0!3m2!1sen!2sin!4v1704191414883!5m2!1sen!2sin"
          ></iframe>
        </div>
      </Container>
    </>
  );
};

export default Contact;
