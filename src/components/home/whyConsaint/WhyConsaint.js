import React from "react";
import Card from "react-bootstrap/Card";

const WhyConsaint = () => {
  const cardsData = [
    {
      title: "People to Process",
      text: "Bridging the gap between individuals and workflows, the people-to-process connection is the heartbeat of efficient operations. Harnessing human expertise and insights, organizations design seamless processes to drive productivity and innovation.",
      image:
        "https://images.pexels.com/photos/3825572/pexels-photo-3825572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Process to Technology",
      text: "Transforming structured workflows into technological realities, the process-to-technology link ensures that operations are streamlined and optimized. Leveraging automation, analytics, and cutting-edge tools, businesses amplify their capabilities and responsiveness",
      image:
        "https://images.pexels.com/photos/3814573/pexels-photo-3814573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Technology to People",
      text: "The technology-to-people nexus marks the integration of innovation into everyday lives. Empowering individuals with advanced solutions, this connection fosters collaboration, enhances communication, and propels societies towards a more connected and intelligent future.",
      image:
        "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
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
