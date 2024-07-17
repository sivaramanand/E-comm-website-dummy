import React from "react";
import "./Memorygame.css";

const Card = ({ item, id, handleClick, flipped }) => {
  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => handleClick(id)}
    >
      <p className="hellowrold"> {flipped || item.stat === "matched" ? item.char : "?"}</p>
    </div>
  );
};

export default Card;
