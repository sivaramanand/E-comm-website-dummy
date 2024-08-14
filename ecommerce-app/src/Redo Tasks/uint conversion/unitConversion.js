import React, { useState, useEffect } from "react";

const UnitConversion = () => {
  const [count, setCount] = useState(() => {
    const savedCount = window.localStorage.getItem("counts");
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });
  useEffect(() => {
    window.localStorage.setItem("counts", JSON.stringify(count));
  }, [count]);
  return (
    <div>
      <h2 data-testid="count-id">Count: {count}</h2>
      <button data-testid="inc-id" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button data-testid="dec-id" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
};

export default UnitConversion;
