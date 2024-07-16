import React from "react";
import "./Memorygame.css";
import one from "./Images/1.jpg";
import two from "./Images/2.jpg";
import three from "./Images/3.jpg";
import four from "./Images/4.jpg";
import five from "./Images/5.jpg";
import eight from "./Images/8.jpg";

const Memorygame = () => {
  const gamesimage = [
    three,
    two,
    one,
    three,
    five,
    four,
    five,
    one,
    eight,
    two,
    four,
    eight,
  ];

  return (
    <div className="memory-game">
      {gamesimage.map((item, index) => (
        <img
          key={index}
          src={item}
          alt={`img-${index}`}
          className="game-image"
        />
      ))}
    </div>
  );
};

export default Memorygame;
