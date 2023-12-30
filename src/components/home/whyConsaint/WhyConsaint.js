import React from "react";
import Card from "react-bootstrap/Card";

const WhyConsaint = () => {
  const cardsData = [
    {
      title: "Card 1 Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Card 2 Title",
      text: "Another example text for the second card.",
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Card 3 Title",
      text: "And here's some more text for the third card.",
      image: "https://via.placeholder.com/100",
    },
  ];
  return (
    <>
      <h1 className="text-center mt-5">Why Consaint</h1>

      <div className="d-flex flex-wrap justify-content-around">
        {cardsData.map((card, index) => (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={card.image}
              alt={`Card ${index + 1} Image`}
            />
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

export default WhyConsaint;
