import React from "react";
const ArrayReduce = () => {
  const courses = [
    { id: 1, name: "reactJs", coin: 200 },
    { id: 2, name: "html", coin: 400 },
    { id: 3, name: "css", coin: 150 },
    { id: 4, name: "nodeJs", coin: 220 },
    { id: 5, name: "typeScript", coin: 250 },
  ];
  const courses2 = [
    { id: 7, name: "reactJs", coin: 200 },
    { id: 2, name: "html", coin: 400 },
    { id: 3, name: "css", coin: 150 },
    { id: 6, name: "nodeJs", coin: 220 },
    { id: 9, name: "typeScript", coin: 250 },
  ];
  //trả về mảng các phần tử có coin bé hơn 300

  const sumWithInitial2 = courses.reduce((accumulator, currentValue) => {
    if (currentValue.coin < 300) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  console.log(sumWithInitial2);
  //dùng với filter
  const test = courses2.filter((index) => {
    return index.coin < 300;
  });
  console.log(test, "//test");
  return (
    <>
      <p>Array reduce</p>
    </>
  );
};

export default ArrayReduce;
