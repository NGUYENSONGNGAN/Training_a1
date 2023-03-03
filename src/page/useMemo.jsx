import React, { useState } from "react";
import Content from "../component/content";
import UseMemoChild from "../component/useMemo";
const UseMemo = () => {
    //reat.memo call is Higher order component (HOC).use note prop of a component ,decide whether to re-render the component or not to optimize performance.
    // Briefly React.memo is used to handle components to avoid re-rendering in unnecessary situations.
  //when click button click me -> set useState of counter -> props change - > rerender component content->console.log(')
  const [counter, setCouter] = useState(1);
  const [count2, setCount2] = useState(1);
  const increase = () => {
    setCouter(counter + 1);
  };
  const increase2 = () => {
    setCount2(counter + 1);
  };
  return (
    <div style={{ padding: "50px" }}>
      <p>useMemo </p>
      <h1>{counter}</h1>
      <h1>{count2}</h1>
      <button onClick={increase}>Click me!</button>
      <button onClick={increase2}>Click me 2!</button>
      <Content counter={counter}/>
      <UseMemoChild/>
    </div>
  );
};

export default UseMemo;
