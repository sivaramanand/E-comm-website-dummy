// src/QuizQuestions.js
import React from "react";
import "./QuizApplication.css";

const QuizQuestions = ({ data, handleAnswer, timeRemaining }) => {
  return (
    <div>
      <h2>{data.question}</h2>
      <div className="options">
        {data.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={timeRemaining === 0}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestions;
