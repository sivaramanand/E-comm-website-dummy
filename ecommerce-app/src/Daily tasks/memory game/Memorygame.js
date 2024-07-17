import React, { useState } from "react";
import "./Memorygame.css";
import Card from "./Card";

const Memorygame = () => {
  const [cards, setCards] = useState(shuffleArray([
    { id: 1, char: 'A', stat: "" },
    { id: 1, char: 'A', stat: "" },
    { id: 2, char: 'B', stat: "" },
    { id: 2, char: 'B', stat: "" },
    { id: 3, char: 'C', stat: "" },
    { id: 3, char: 'C', stat: "" },
    { id: 4, char: 'D', stat: "" },
    { id: 4, char: 'D', stat: "" },
    { id: 5, char: 'E', stat: "" },
    { id: 5, char: 'E', stat: "" },
    { id: 6, char: 'F', stat: "" },
    { id: 6, char: 'F', stat: "" },
    { id: 7, char: 'G', stat: "" },
    { id: 7, char: 'G', stat: "" },
    { id: 8, char: 'H', stat: "" },
    { id: 8, char: 'H', stat: "" }
  ]));
  
  const [flippedIndices, setFlippedIndices] = useState([]);
  
  const handleClick = (index) => {
    if (flippedIndices.length === 2 || flippedIndices.includes(index)) return;
    
    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);
    
    if (newFlippedIndices.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndices;
      if (cards[firstIndex].id === cards[secondIndex].id) {
        // Mark the cards as matched
        const newCards = cards.map((card, idx) =>
          idx === firstIndex || idx === secondIndex ? { ...card, stat: "matched" } : card
        );
        setCards(newCards);
        setFlippedIndices([]);
      } else {
        // Flip cards back after a short delay
        setTimeout(() => setFlippedIndices([]), 1000);
      }
    }
  };

  return (
    <div className="container">
      {cards.map((item, index) => (
        <Card
          key={index}
          item={item}
          id={index}
          handleClick={handleClick}
          flipped={flippedIndices.includes(index) || item.stat === "matched"}
        />
      ))}
    </div>
  );
};

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export default Memorygame;
