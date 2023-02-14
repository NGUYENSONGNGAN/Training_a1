import React from "react";
const Spread_restOperator = () => {
  //exe:
  const listNumber = [1, 2, 3];
  const newListNumber = [listNumber, 4]; //[[1,2,3],4]
  //const newListNumber = [...listNumber,4]//[1,2,3,4]

  function sum(x, y, z) {
    return x + y + z;
  }

  const numbers = [1, 2, 3];

  console.log(sum(...numbers)); // Expected output: 6

  //syntax
  /* myFunction(a, ...iterableObj, b)
[1, ...iterableObj, '4', 'five', 6]
{ ...obj, key: 'value' } */

  //Only iterable objects, like Array, can be spread in array and function parameters.
  //Many objects are not iterable, including all plain objects that lack a Symbol.iterator method:

  /* const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable */

  //For typical arrays, all indices are enumerable own properties, so arrays can be spread into objects.
  const array = [1, 2, 3];
  const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }

  //array
  //Copy an array
  const arr = [1, 2, 3];
  const arr2 = [...arr]; // like arr.slice()

  arr2.push(4);
  //  arr2 becomes [1, 2, 3, 4]

  //exe array
  const parts = ["shoulders", "knees"];
  const lyrics = ["head", ...parts, "and", "toes"];
  console.log(lyrics); //  ["head", "shoulders", "knees", "and", "toes"]

  //object
  const obj1 = { foo: "bar", x: 42 };
  const obj2 = { foo: "baz", y: 13 };

  const clonedObj = { ...obj1 };
  console.log(clonedObj); // { foo: "bar", x: 42 }

  const mergedObj = { ...obj1, ...obj2 };
  console.log(mergedObj); // { foo: "baz", x: 42, y: 13 }

  //difference between spread and rest operator
//The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array.
// But the spread syntax expands iterables into individual elements.
  return <p>spread_restOperator </p>;
};

export default Spread_restOperator;
