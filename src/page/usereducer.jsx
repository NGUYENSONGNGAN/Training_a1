import React, { useReducer, useState } from "react";
const UseReducer = () => {
  //init state
  const initState = { age: 50, name: "ngan" };
  //action
  const Up_ACTION = "up";
  const Down_ACTION = "down";
  //reducer
  const reducer = (state, action) => {
    switch (action) {
      case Up_ACTION:
        return { ...state, age: state.age + 10 };
      case Down_ACTION:
        return { ...state, age: state.age - 10 };
      default:
        console.log("sai");
    }
  };
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div style={{ padding: "50px" }}>
      <p>useReducer </p>
      <h1>{JSON.stringify(state)}</h1>

      <button onClick={() => dispatch(Up_ACTION)}>Up</button>
      <button onClick={() => dispatch(Down_ACTION)}>down</button>
    </div>
  );
};

export default UseReducer;
