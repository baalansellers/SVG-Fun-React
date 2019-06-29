import React from "react";

function Shape() {
  return (
    <div>
      <h2>Shape</h2>
      <svg height="100" width="300" viewBox="0, 0, 600, 100" style={{borderStyle: 'solid', borderWidth: '1px', borderColor: 'red'}}>
          <circle fill="#00FF00" cx="150" cy="50" r="25"></circle>
      </svg>
    </div>
  );
}

export default Shape;
