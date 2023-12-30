import React from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import HeroImage from "../../assets/hero_image.png";
import aboutImage from "../../assets/about.png";
import "../home/Home.css";
import Button from "react-bootstrap/Button";
import Cards from "./cards/Cards";
import Card from "react-bootstrap/Card";
import servicesImg1 from "../../assets/services2.png";
import servicesImg2 from "../../assets/services3.png";
import servicesImg3 from "../../assets/services4.png";
import { Link } from "react-router-dom";
import WhyConsaint from "./whyConsaint/WhyConsaint";
import ContactForm from "../contactForm/ContactForm";

const Home = () => {
  return (
    <>
      <Container>
        <section>
          <div className="hero-section">
            <div className="text-container">
              <h1>Contrary to popular belief, Lorem Ipsum</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500.
              </p>
              <Button className="enqurebtn rounded-pill">Enquire Now</Button>
              <Button className="contactbtn rounded-pill ">Contact Us</Button>
            </div>
            <div className="image-container">
              <img src={HeroImage} alt="hero" />
            </div>
          </div>
        </section>

        <section>
          <Cards />
        </section>
      </Container>

      <section className="about-section-head">
        <Container>
          <div className="about-section">
            <div className="text-container">
              <h1>Latin literature from 45 BC, making it</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500 <br /> Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500.
              </p>
              <Button className="contactbtn rounded-pill ">Contact Us</Button>
            </div>
            <div className="image-container">
              <img src={aboutImage} alt="hero" />
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-5 ">
        <h1 className="text-center">Our Services</h1>
        <Container className="d-flex flex-wrap justify-content-around">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={servicesImg1} />
            <Card.Body>
              <Card.Title>Resources</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/service">Read more</Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={servicesImg2} />
            <Card.Body>
              <Card.Title>Our Services</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/service">Read more</Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={servicesImg3} />
            <Card.Body>
              <Card.Title>Lorem text</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/service">Read more</Link>
            </Card.Body>
          </Card>
        </Container>
      </section>

      <section className="contact-section mt-5">
        <Container className="d-flex flex-wrap justify-content-between">
          <h3>Connect with Consaint</h3>
          <button type="button" class="btn btn-outline-light">
            Contact Us
          </button>
        </Container>
      </section>

      <section>
        <Container>
          <WhyConsaint />
        </Container>
      </section>

      <section style={{ background: "rgb(235, 235, 235)" }} className="mt-5">
        <Container className="d-flex flex-wrap justify-content-around mt-5">
          {/* 1px solid rgb(235, 235, 235) */}
          <div class="section">
            <h2>Section 1</h2>
            <p>This is the content of section 1.</p>
          </div>

          <div class="separator"></div>

          <div class="section">
            <h2>Section 2</h2>
            <p>This is the content of section 2.</p>
          </div>

          <div class="separator"></div>

          <div class="section">
            <h2>Section 3</h2>
            <p>This is the content of section 3.</p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <ContactForm />
        </Container>
      </section>
    </>
  );
};

export default Home;
