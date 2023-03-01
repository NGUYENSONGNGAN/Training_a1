import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  //The useRef Hook allows you to persist values between renders.
  //It can be used to store a mutable value that does not cause a re-render when updated.
  //it can be used to access a DOM element directly.
  const [count, setCount] = useState(180);
  useEffect(() => {
    console.log(h1Ref.current);
  }, []);
  let clearId = useRef();
  let h1Ref = useRef();
  const hanleStart = () => {
    clearId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };
  const hanleStop = () => {
    clearInterval(clearId.current);
  };
  return (
    <div style={{ padding: "50px" }}>
      <h1>UseRef</h1>
      <h1 ref={h1Ref}> {count}</h1>
      <button onClick={hanleStart}>Add</button>
      <button onClick={hanleStop}>Add</button>
    </div>
  );
};

export default UseRef;
