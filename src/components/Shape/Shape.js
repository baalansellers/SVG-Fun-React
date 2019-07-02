import React from "react";

function Shape() {
  return (
    <div>
      <h2>Shape</h2>
      <svg height="100" width="300" viewBox="0, 0, 600, 100" style={{borderStyle: 'solid', borderWidth: '1px', borderColor: 'red'}}>
          <path d={`
          M150 0
          A 20 20 0 0 1 60 60
          `}/>
      </svg>
    </div>
  );
}

export default Shape;
