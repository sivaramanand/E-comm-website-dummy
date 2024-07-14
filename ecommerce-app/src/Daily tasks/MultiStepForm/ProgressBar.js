import React from "react";

const ProgressBar = ({ step, totalSteps }) => {
  const percentage = ((step / totalSteps) * 100).toFixed(0);
  return (
    <div className="progress-bar">
      <div
        className="progress-bar__fill"
        style={{ width: `${percentage}%`,background:"blue" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
