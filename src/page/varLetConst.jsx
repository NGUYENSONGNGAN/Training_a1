import React from "react";
const Var_let_cont = () => {
  /* exe var */
  var greeting0 = "hey hi";
  var times = 4;

  if (times > 3) {
    var greeting0 = "say Hello instead";
  }

  console.log(greeting0); //"say Hello instead"
  // tính biến var sẽ có scope là globally scoped.
  //Đặc biệt, biến var còn có thêm tính chất hoisting: nghĩa là dù khai báo ở đâu thì biến đều sẽ được đem lên đầu scope trước khi code được thực hiện.
  //vd:
  console.log(hoistingVar); // kết quả cho ra sẽ là undefined bởi vì trình Cơ chế Hoisting của Javasript đã đưa khai báo biến lên trên cùng.
  var hoistingVar = "say hello";

  /* exe let  */

  //Biến được khai báo sẽ có scope là block scoped
  let greeting = "say Hi";
  if (true) {
    let greeting = "say Hello instead";
    let block = "say Hello instead";
    console.log(greeting); // "say Hello instead"
  }
  console.log(greeting); // "say Hi"
  //console.log(block) //block' is not defined

  //let chỉ được cập nhật lại không được khai báo lại biến

  let vd = "say Hi";
  console.log(vd); //"say Hi"

  vd = "say Hello instead";
  console.log(vd); //"say Hello instead"

  let vd1 = "say Hi";
  //let vd1 = "say Hello instead"; // error: Identifier 'greeting' has already been declared

  //Giống với var, let cũng có tính hoisting tuy nhiên lại khác nhau ở chỗ thay vì var được khởi tạo với giá trị là undefined thì let sẽ không có bất kỳ giá trị khởi tạo nào.
  // Điều này dẫn đến việc nếu chúng ta sử dụng biến let trước khi khai báo thì sẽ gặp lỗi Reference Error.
  //exe:
  //console.log(hoistingLet); //sẽ gặp lỗi
  let hoistingLet = "test";

  /* exe const  */
  // tương tự với let const cũng có scope là block scoped, và hoisting
  //Trong trường hợp kiểu của biến là primitive (bao gồm string, number, boolean, null, và undefined) thì chúng ta sẽ không thể tái khai báo hay cập
  // nhật giá trị mới để thay thế cho giá trị trước đó của biến.
  //exe:
  const stringConst = "say Hi";
  //stringConst = "say Hello instead";// sẽ bị lỗi

  //Đối với trường hợp kiểu biến là reference (bao gồm object, array, và function) thì tuy không thể tái khai báo hay cập nhật giá trị của biến
  // nhưng chúng ta vẫn có thể cập nhật giá trị cho thuộc tính của biến đó.

  const greeting1 = {
    message: "Hello",
    number: "five",
  };

  greeting1.message = "say Hello instead";
  console.log(greeting1); // {message:"say Hello instead",number:"five"}

  return <p> </p>;
};

export default Var_let_cont;
