import React from "react";
import Child from "../component/Child";
const ComponentArchitecture = () => {
  //Components are independently defined interface (UI) components
  //You can split a component into multiple smaller components to have a more readable and maintanable design and/or to achieve reuse.
  // Components include : “Functional Components” and “Class Components”.
  //Components commonly communicate in these ways:

  //Parent to Child
  //Child to Parent
  //Parent to Child communication is passing a data property into a component. More specifically, passing some data (could be a string (primitive), object, array) into a child component.
  //Child to Parent communication is passing a function as a property into a component. The function is later invoked in the child but executed in the context of the parent.
  //exe
  const [words, setWords] = React.useState("");
  const handleClick = () => {
    setWords("được truyển vào từ parent ?");
  };
  const handleRequest = (request) => {
    if (request.includes("click")) {
      alert("yes");
    }
  };
  return (
    <>
      <p>Component architecture </p>
      <h1>Parent</h1>
      <button onClick={handleClick}>Ask</button>

      <Child hears={words} onRequest={handleRequest} />
    </>
  );
};

export default ComponentArchitecture;
