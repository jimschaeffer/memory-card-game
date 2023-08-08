import { useState, useEffect } from "react";
import Card from "./Card";

const Gameboard = ({ handleScore }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Mario",
      img: "https://supermariocards.netlify.app/mario.jpg",
    },
    {
      id: 2,
      text: "Luigi",
      img: "https://supermariocards.netlify.app/luigi.jpg",
    },
    {
      id: 3,
      text: "Toad",
      img: "https://supermariocards.netlify.app/toad.jpg",
    },
    {
      id: 4,
      text: "Peach",
      img: "https://supermariocards.netlify.app/peach.jpg",
    },
    {
      id: 5,
      text: "Bowser",
      img: "https://supermariocards.netlify.app/bowser.jpg",
    },
    {
      id: 6,
      text: "Wario",
      img: "https://supermariocards.netlify.app/wario.jpg",
    },
    {
      id: 7,
      text: "Donkey Kong",
      img: "https://supermariocards.netlify.app/dk.jpg",
    },
    {
      id: 8,
      text: "Star",
      img: "https://supermariocards.netlify.app/star.jpg",
    },
  ]);

  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    setCards(shuffle(cards));
  }, []);

  const shuffle = (array) => {
    const cardArray = array.slice(0);
    for (let i = 0; i < array.length; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = cardArray[i];
      cardArray[i] = cardArray[randomIndex];
      cardArray[randomIndex] = temp;
    }
    return cardArray;
  };

  const handleClick = (id) => {
    setCards(shuffle(cards));
    if (clickedCards.includes(id)) {
      setClickedCards([]);
      handleScore(false);
    } else {
      setClickedCards(clickedCards.concat(id));
      handleScore(true);
    }
  };

  return (
    <div className="gameboard">
      {cards.map((card) => (
        <Card card={card} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Gameboard;
