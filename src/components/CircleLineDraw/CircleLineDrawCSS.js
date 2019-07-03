import React, { useEffect, useState } from "react";

function CircleLineDrawCSS() {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused && offset < 1000) {
      const timerId = setTimeout(() => {
        if(!isPaused) {
          setOffset(offset + 2);
        }
      }, 10);

      return () => clearTimeout(timerId);
    }
  });

  const handleReset = () => {
    setIsPaused(true);
    setOffset(0);
    setIsPaused(false);
  };

  const timerStyle = {
    fill: "none",
    stroke: "#8cc63f",
    strokeMiterlimit: "10",
    strokeWidth: "50px",
    strokeDasharray: "1000",
    strokeDashoffset: `${offset}`
  };

  return (
    <div>
      <h2>Shape</h2>
      <h3>{offset}</h3>
      <svg
        height="200"
        width="200"
        viewBox="0, 0, 668, 668"
        style={{ borderStyle: "solid", borderWidth: "1px", borderColor: "red" }}
      >
        <circle style={timerStyle} cx="184.35" cy="184.35" r="159.35" transform='rotate(100deg)' />
      </svg>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default CircleLineDrawCSS;
