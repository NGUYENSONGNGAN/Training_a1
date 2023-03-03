import React, { useMemo, useRef, useState } from "react";
const UseMemoChild = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const nameRef = useRef();
  const handelSubmit = () => {
    //useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
    //The useMemo Hook only runs when one of its dependencies update.
    //This can improve performance.
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };

  const total = useMemo(() => {
    //code run when value product change
    console.log(products);
    const result = products.reduce((result, prod) => {
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);
  return (
    <div style={{ padding: "50px" }}>
      <p>useMemo </p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        ref={nameRef}
      />
      <br />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price"
      />
      <br />
      <button onClick={handelSubmit}>add</button>
      <h1>Total:</h1>
      <h4>{total}</h4>
    </div>
  );
};

export default UseMemoChild;
