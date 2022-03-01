import React from "react";

const Display = ({ textToDisplay }) => {
  return (
    <div id="result" className="result">
      {textToDisplay || "0.00"}
    </div>
  );
};

export default Display;
