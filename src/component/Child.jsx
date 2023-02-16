import React from "react";
const Child = (props) => {
  const handleClick = () => {
    props.onRequest("Bạn đã click vào đây đúng không?");
  };
  return (
    <>
      <div style={{ background: "#FFCC66" }}>
        <h2>Component Child</h2>
        <p>{props.hears}</p>

        <button onClick={handleClick}>Bạn đã click vào đây đúng không</button>
      </div>
    </>
  );
};

export default Child;
