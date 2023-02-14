import React from "react";
const Destructuring = () => {
    //The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
  //exe
  let a, b, rest;
  // Swapping
  [a, b] = [10, 20];

  console.log(a);
  // Expected output: 10

  console.log(b);
  // Expected output: 20

  [a, b, ...rest] = [10, 20, 30, 40, 50];

  console.log(rest);
  // Expected output: Array [30, 40, 50]

  const [e, g, ...c] = [1, 2, 3, 4, 5];
  console.log(e, g, c); //1, 2, [3, 4, 5]
  // Variable assignment

  //when we use rest api when return array or object use destructuring effective then
  //exe
  const res = [1, 2, 3, 4]; //res.response();
  //const [a, b, c] = res
  //console.log(a, b, c);//1 2 3
  //Nested object and array destructuring
  //In this case, I recommend you to use it because this is the case a lot in our code.
  const blogs = {
    anonystick: [
      {
        pageFacebook: "Tip javascript Viet Nam",
        likes: 4789,
        daily: 1323,
      },
    ],
  };

  const {
    anonystick: [{ pageFacebook: namePage, likes: numLikes, daily: numDaily }],
  } = blogs;

  console.log(namePage, numLikes, numDaily); //Tip javascript Viet Nam, 4789, 1323
  return (
    <>
      <p>function_arrowfunction </p>
    </>
  );
};

export default Destructuring;
