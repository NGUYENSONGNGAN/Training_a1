import { tab } from "@testing-library/user-event/dist/tab";
import React, { useEffect, useLayoutEffect, useState } from "react";

const UseEffectTimer = () => {
  const [countdown, setCountDown] = useState(180);
  const [countdown2, setCountDown2] = useState(180);
  useEffect(() => {
    setInterval(() => {
      setCountDown(countdown - 1);
    }, 1000);
  }, [countdown]);
  
  useLayoutEffect(() => {
    setInterval(() => {
      setCountDown2(countdown - 1);
    }, 1000);
  }, [countdown]);
  return (
    <div style={{ padding: "50px" }}>
      <h1>UseEffectTimer</h1>
      <h1>{countdown}</h1>
      <h1>{countdown2}</h1>
    </div>
  );
};

export default UseEffectTimer;
