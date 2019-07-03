import React, { useEffect, useState } from "react";

function CircleLineDrawPath() {
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

  const charStyle = {
      fontSize: "20px"
  }

  /*
<path 
    d="
    M cx cy
    m -r, 0
    a r,r 0 1,0 (r * 2),0
    a r,r 0 1,0 -(r * 2),0
    "            
/>
  */
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
        <path style={timerStyle} 
            d="
            M 184.35, 184.35
            m 0, -159.35
            a 159.35, 159.35  180  1 1  0,318.7
            a 159.35, 159.35  180  1 1  0,-318.7
            " />
            <text style={{fontSize: '15em', fontFamily: 'Trebuchet MS'}} x="112" y="255">A</text>
      </svg>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default CircleLineDrawPath;
