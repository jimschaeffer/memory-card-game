import { useState, useEffect } from "react";
import Card from "./Card";

const Gameboard = ({ handleScore }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Mario",
      img: "imgs/mario.jpg",
    },
    {
      id: 2,
      text: "Luigi",
      img: "imgs/luigi.jpg",
    },
    {
      id: 3,
      text: "Toad",
      img: "imgs/toad.jpg",
    },
    {
      id: 4,
      text: "Peach",
      img: "imgs/peach.jpg",
    },
    {
      id: 5,
      text: "Bowser",
      img: "imgs/bowser.jpg",
    },
    {
      id: 6,
      text: "Wario",
      img: "imgs/wario.jpg",
    },
    {
      id: 7,
      text: "Donkey Kong",
      img: "imgs/dk.jpg",
    },
    {
      id: 8,
      text: "Yoshi",
      img: "imgs/yoshi.jpg",
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
