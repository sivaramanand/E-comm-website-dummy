import React, { useState, useRef } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const timeRef = useRef(null);
  const startTimer = () => {
    if (start === false) {
      const timer = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setIntervalId(timer); 
      setStart(true);
    } else {
      clearInterval(intervalId);
      setStart(false);
    }
  };
  return (
    <div>
      <p>{timer}</p>
      <button onClick={() => startTimer()}>
        {!start ? "Start timer" : "stop timer"}
      </button>
    </div>
  );
};

export default Timer;
