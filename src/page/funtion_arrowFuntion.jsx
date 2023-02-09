import React from "react";
const function_arrowfunction = () => {
  /* arrow function */
  const exeArrowFunction = () => {
    console.log("exeArrowfunction");
  };
  // TH có tham số
  const Thamso = (name) => {
    console.log("hello ", name);
  };
  //ngoài ra arrow funtion có thể bỏ từ khóa return
  const double = (x) => x * 2;
  //Ngoài ra, ta còn sử dụng được arrow function trong trường hợp: map, filter, forEach,. vì
  //exe
  const numbers = [1, 2, 3, 4];
  const newArray = numbers.map((item) => item * 2);
  const newArray2 = numbers.map(function (item) {
    return (item) => item * 2;
  });
  //code của newArray sẽ gọn hơn là code newArray2

  //Khác với function thông thường, arrow function không có bind vì vậy, không định nghĩa lại this. 


  /* function */
  function exeFunction() {
    console.log("exefunction");
  }
  //TH có tham số
  function ThamsoFunction(x) {
    return x * 2;
  }
  return (
    <>
      <p>function_arrowfunction </p>
      {exeArrowFunction()}

      {exeFunction()}
      {Thamso("test")}
      {/* => hello test */}
      {ThamsoFunction(6)}
    </>
  );
};

export default function_arrowfunction;
