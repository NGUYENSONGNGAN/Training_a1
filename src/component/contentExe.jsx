import React, { memo } from "react";
const ContentExe = ({ onIncrease }) => {
  console.log("re-render");
  return (
    <>
      <h2>Research useCallback hook</h2>
      <button onClick={onIncrease}>Click me!</button>
    </>
  );
};

export default memo(ContentExe);
