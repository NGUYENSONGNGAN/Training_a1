import React from "react";
const Var_let_cont = () => {



    /* exe var */
    var greeting0 = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeting0 = "say Hello instead"; 
    }

    console.log(greeting0); //"say Hello instead"
  /* exe let  */
  let greeting = "say Hi";
  if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
  }
  console.log(greeting); // "say Hi"
  //let chỉ được cập nhật lại không được khai báo lại biến

  let vd = "say Hi";
  console.log(vd); //"say Hi"

  vd = "say Hello instead";
  console.log(vd); //"say Hello instead"

  let vd1 = "say Hi";
  //let vd1 = "say Hello instead"; // error: Identifier 'greeting' has already been declared

  /* exe const  */

  const greeting1 = {
    message : "Hello",
    number : "five"
}

greeting1.message = "say Hello instead";
console.log(greeting1); // {message:"say Hello instead",number:"five"}

  return <p> </p>;
};

export default Var_let_cont;
