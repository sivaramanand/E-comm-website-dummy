import React, { useReducer } from "react";

const UseReducer = () => {
  const custReducer = (state, action) => {
    switch (action.type) {
      case "increment": {
        return { count: state.count + 1, showText: state.showText };
      }
      case "toggleshowText": {
        return { count: state.count, showText: !state.showText };
      }
    }
  };
  const [state, dispatch] = useReducer(custReducer, {
    count: 0,
    showText: true,
  });
  return (
    <div>
      <p>{state.count}</p>
      {state.showText && <p>Text is visible</p>}

      <button
        onClick={() => {
          dispatch({ type: "increment" });
          dispatch({ type: "toggleshowText" });
        }}
      >
        button
      </button>
    </div>
  );
};

export default UseReducer;
