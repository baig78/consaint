import React from "react";
import Card from "react-bootstrap/Card";
import "../cards/Cards.css";
import { Link } from "react-router-dom";

const Cards = () => {
  const cardsData = [
    {
      title: "Healthcare",
      text: "Consaint creates business value by adopting rapid change in the health care industry. We understand our client, business needs and clinical process to help expertise and seize the change",
      iconClass: "far fa-snowflake",
      linkTo: "/healthcare",
    },
    {
      title: "Insurance",
      text: "Consaint creates business value by adopting the change in the insurance industry. We understand our client, business needs to help expertise and seize the change-driven across the insurance value chain",
      iconClass: "fas fa-university",
      linkTo: "/insurance",
    },
    {
      title: "Life Sciences",
      text: "Consaint provides life science organizations to go beyond process optimization for the future bold vision to design and implement enterprise wide, scalable, sustainable transformations to meet unique needs.",
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
