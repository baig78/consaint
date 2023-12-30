import React from "react";
import Card from "react-bootstrap/Card";
import "../cards/Cards.css";

const Cards = () => {
  const cardsData = [
    {
      title: "Lorem Ipsum is simply",
      text: "Lorem Ipsum is simply dummy text of the printing and.",
      iconClass: "far fa-snowflake",
    },
    {
      title: "Lorem Ipsum is simply",
      text: "Another example text for the second card.",
      iconClass: "fas fa-university",
    },
    {
      title: "Lorem Ipsum is simply",
      text: "And here's some more text for the third card.",
      iconClass: "fas fa-tools",
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
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
