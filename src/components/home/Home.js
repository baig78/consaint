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
              <h1>OUR VISION</h1>
              <p>
                To be the leading global provider of best of breed business
                solutions, leveraging technology and delivered by best talest.
              </p>

              <Link to="/contact">
                <Button className="enqurebtn rounded-pill">Enquire Now</Button>
              </Link>
              <Link to="/contact">
                <Button className="contactbtn rounded-pill ">Read More</Button>
              </Link>
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
              <h1>About Us</h1>
              <p>
                Being a critical sector Consaint creates business value by
                adopting and understanding client’s business needs to help
                expertise and seize the change-driven across the banking and
                finance in managing transactions, mitigating risks and ensuring
                regulatory compliance using sophisticated technologies.
              </p>

              <Link to="/company">
                <Button className="contactbtn rounded-pill ">Read More</Button>
              </Link>
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
              <Card.Title>Staffing and Training</Card.Title>
              <Card.Text>
                Consaint IT staffing involves understanding the unique
                requirements of each project or position, matching the right
                skill sets, and providing ongoing support to ensure optimal
                performance.
              </Card.Text>
              <Link to="/service">Read more</Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={servicesImg2} />
            <Card.Body>
              <Card.Title>Cloud Solutions</Card.Title>
              <Card.Text>
                Leveraging cloud services allows businesses to reduce capital
                expenses associated with traditional on-premises infrastructure,
                promoting cost-efficiency and flexibility in resource
                allocation.
              </Card.Text>
              <Link to="/service">Read more</Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={servicesImg3} />
            <Card.Body>
              <Card.Title>Data Management</Card.Title>
              <Card.Text>
                Data management tools play a critical role in data governance,
                enabling organizations to define policies, enforce standards,
                and maintain a centralized repository for authoritative and
                accurate data.
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
            <h2 style={{ color: "rgb(0, 108, 183)" }}>70+</h2>
            <p>Countries</p>
          </div>

          <div class="separator"></div>

          <div class="section">
            <h2 style={{ color: "rgb(0, 108, 183)" }}>120,000+</h2>
            <p>Empolyees</p>
          </div>

          <div class="separator"></div>

          <div class="section">
            <h2 style={{ color: "rgb(0, 108, 183)" }}>240+</h2>
            <p>Coustomers</p>
          </div>
        </Container>
      </section>

      <section style={{ background: "rgb(225 243 255)", padding: "60px" }}>
        <Container>
          <ContactForm />
        </Container>
      </section>
    </>
  );
};

export default Home;
