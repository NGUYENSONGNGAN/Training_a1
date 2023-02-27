import React, { useState } from "react";
const UseState = () => {
  /* useState */
  const [counter, setCouter] = useState(1);
  return (
    <div style={{ padding: "50px" }}>
      <p>useState </p>
      <h1>{counter}</h1>
      <button
        onClick={() => setCouter(counter + 1)}
        style={{ width: "150px", height: "150px" }}
      >
        increase
      </button>
    </div>
  );
};

export default UseState;
