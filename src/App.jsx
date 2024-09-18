import { useState } from "react";
import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.webp";
import img3 from "./assets/img3.webp";
import MainCard from "./components/MainCard";
import Card from "./components/Card";
import CardImage from "./components/CardImage";
import CardText from "./components/CardText";
import Buttons from "./components/Buttons";
import "./App.css";

function App() {
  const cardArr = [
    {
      image: img1,
      title: "Card One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates inventore quidem.",
    },
    {
      image: img2,
      title: "Card Two",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates inventore quidem.",
    },
    {
      image: img3,
      title: "Card Three",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates inventore quidem.",
    },
  ];

  return (
    <>
      <MainCard>
        {cardArr.map((card) => (
          <Card>
            <CardImage image={card.image}></CardImage>
            <CardText title={card.title} desc={card.description}></CardText>
            <Buttons></Buttons>
          </Card>
        ))}
      </MainCard>
    </>
  );
}

export default App;
