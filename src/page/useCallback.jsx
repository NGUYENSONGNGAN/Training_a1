import React, { useCallback, useState } from "react";
import ContentExe from "../component/contentExe";
const UseCallback = () => {
    //useCallback is a React Hook that lets you cache a function definition between re-renders.
    //use useCallback when you use react.memo because if not use react.memo then component child still rerender  
  const [counter, setCouter] = useState(1);
  const handelIncrease = useCallback(() => {
    setCouter(prev=>prev + 1);
  },[])

  return (
    <div style={{ padding: "50px" }}>
      <p>useCallback</p>
      <h1>{counter}</h1>

      <ContentExe onIncrease={handelIncrease} />
    </div>
  );
};

export default UseCallback;
