import React, { memo } from "react";
const Content = ({counter}) => {
  console.log('re-render')
  return (
    <>
     <h2>Research useMemo hook</h2>
    </>
  );
};

export default memo(Content);
