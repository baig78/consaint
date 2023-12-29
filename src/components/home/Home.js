import React from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import HeroImage from "../../assets/hero_image.png";
import "../home/Home.css";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <Container>
      {/* <Row>
        <Col>
          <h1>Contrary to popular belief, Lorem Ipsum</h1>
        </Col>
        <Col>
          <img src={HeroImage} alt="hero" />
        </Col>
      </Row> */}
      <div className="hero-section">
        <div className="text-container">
          <h1>Contrary to popular belief, Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>
          <Button className="enqurebtn rounded-pill">Enquire Now</Button>
          <Button className="contactbtn rounded-pill ">Contact Us</Button>
        </div>
        <div className="image-container">
          <img src={HeroImage} alt="hero" />
        </div>
      </div>
    </Container>
  );
};

export default Home;
