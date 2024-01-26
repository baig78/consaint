import React from "react";
import Card from "react-bootstrap/Card";
import "../cards/Cards.css";
import { Link } from "react-router-dom";

const Cards = () => {
  const cardsData = [
    {
      title: "Administration & Development",
      text: "Consaint’s are expertise in integrating solutions that automates the process of...",
      iconClass: "far fa-snowflake",
      linkTo: "/healthcare",
    },
    {
      title: "Staffing And Training",
      text: "Consaint IT staffing involves understanding the unique requirements of each project...",
      iconClass: "fas fa-university",
      linkTo: "/insurance",
    },
    {
      title: "Cloud Solutions",
      text: "Leveraging cloud services allows businesses to reduce capital expenses associated with...",
      iconClass: "fas fa-tools",
      linkTo: "/life-sciences",
    },
  ];

  return (
    <>
      <div className="d-flex flex-wrap justify-content-around">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            style={{
              width: "18rem",
              margin: "10px",
              border: "1px solid #ebebeb",
            }}
          >
            <i
              className={card.iconClass}
              style={{
                fontSize: "50px",
                color: "#006cb7",
                margin: "20px 20px",
              }}
            ></i>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              <Link to={card.linkTo}>Read More</Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
