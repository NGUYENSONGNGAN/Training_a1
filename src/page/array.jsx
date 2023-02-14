import React from "react";
const ArrayInJs = () => {
  const List = ["a", "t", "h", "n", "g"];
  const ListNumber = [1, 2, 4, 6, 3, 7, 9];
  const stringName = "Mot ngay vui ve";
  //length
  //The length data property of an Array instance represents the number of elements in that array.
  console.log(List.length, "//length"); //5
  //-----*pop remove element last
  const removed = List.pop();
  console.log(removed, "//pop"); //g
  console.log(List, "//pop"); //["a", "t", "h", "n"];
  //-----*push add element last
  const push = List.push("add");
  console.log(List, "//push"); // ["a", "t", "h", "n", "g","add"] //if don't run code pop() atop
  //-----*shift remove element first
  const firstElement = List.shift();
  console.log(firstElement, "//shift"); //a
  //-----*sort()  sorts the elements return the reference to the same array
  ListNumber.sort();
  console.log(ListNumber, "//sort "); //[1,2,3,4,6,7,9]
  //-----*map method creates a new array populated with the results of calling a provided function on every element in the calling array.
  const newArray = ListNumber.map((x) => x * 2);
  console.log(newArray, "//map"); //[2,4,6,8,12,14,18]
  //-----*find method returns the first element in the provided array that satisfies the provided testing function.
  // If no values satisfy the testing function, undefined is returned.
  const findElement = ListNumber.find((element) => element > 15);
  console.log(findElement, "//find"); //18
  //-----*findIndex
  // method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
  console.log(
    ListNumber.findIndex((element) => element > 5),
    "//findIndex"
  ); //5
  console.log(
    ListNumber.findIndex((element) => element > 20),
    "//findIndex"
  ); //-1
  //-----*findLast
  //ethod iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function.
  // If no elements satisfy the testing function, undefined is returned.
  console.log(
    ListNumber.findLast((element) => element > 5),
    "//findLast"
  ); //9
  //-----*filter  The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that
  //pass the test implemented by the provided function.
  const filterElement = ListNumber.filter((element) => element > 10);
  console.log(filterElement, "//filter"); //[12,14,18]
  //-----*concat
  // The concat() method is used to merge two or more arrays. This method does not change the existing arrays,
  //but instead returns a new array.
  const concatArray = ListNumber.concat(List);
  console.log(concatArray, "//concatArray"); // [1, 2, 4, 6, 3, 7, 9,"a", "t", "h", "n", "g"]
  //-----*indexOf
  //method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  const indexOfElement = ListNumber.indexOf(4);
  console.log(indexOfElement, "//indexOf"); //2
  //-----*at()
  //The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.
  //Negative integers count back from the last item in the array.
  let index = 2;
  console.log(ListNumber.at(index), "//At()"); //3
  index = -2;
  console.log(ListNumber.at(index), "//At()"); //7 //if index<ListNumber.length => return undefined
  //-----*every
  //method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
  console.log(
    ListNumber.every((e) => e > 20),
    "//every"
  ); // false
  console.log(
    ListNumber.every((e) => e < 20),
    "//every"
  ); //true

  //-----*forEach
  //method executes a provided function once for each array element.
  ListNumber.forEach((e) => console.log(e, "foEach"));
  //1
  //2
  //3
  //4
  //5
  //6
  //7
  //9
  //-----*include
  //method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
  console.log(ListNumber.includes(50), "//include"); // false
  console.log(ListNumber.includes(2), "//include"); //true
  //-----*join
  //connet array elements into string.default spacing "," or separator pass in
  console.log(List.join(), "//join"); //"t,h,n,add ";
  console.log(List.join("-"), "//join"); //"t-h-n-g-add";
  //-----*toString
  // method returns a string representing the specified array and its elements.
  console.log(List.toString(), "//toString"); //"t,h,n,add ";
  //-----*unshift
  //method adds one or more elements to the beginning of an array and returns the new length of the array.
  console.log(List.unshift("g"), "//unshift"); //5
  console.log(List, "//unshift"); //[g,t,h,n,add ];
  //-----*slice
  // cut element array
  //syntax slice() or slice(start) or slice(start, end)
  console.log(List.slice(2, 4), "//slice"); //[h,n ];
  console.log(List.slice(2), "//slice"); //[h,n,add ];
  console.log(List.slice(), "//slice"); //[g,t,h,n,add ];
  console.log(List.slice(-2), "//slice"); //[n,add ];
  //-----*splice
  //method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
  // To access part of an array without modifying it, see slice().
  //syntax splice(start) or splice(start, deleteCount) or splice(start, deleteCount, item1) or splice(start, deleteCount, item1, item2, itemN)
  console.log(List.slice(2, 0, "item"), "//splice"); //[g,t,item,h,n,add ];
  console.log(List.slice(2, 1, "item"), "//splice"); //[g,t,item,n,add ];
  console.log(List.slice(2, 1, "item", "item1"), "//splice"); //[g,t,item,item1,n,add ];
  console.log(List.slice(2, 1), "//splice"); //[g,t,n,add ];

  //-----*reduce
  /* method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. 
The final result of running the reducer across all elements of the array is a single value.
The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place.
 Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0). */ //=> reference developer.mozilla.org

  const initialValue = 0;
  const sumWithInitial = ListNumber.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  console.log(sumWithInitial, "//reduce");
  // Expected output: 32

  return (
    <>
      <p>Arry in javaScript </p>
    </>
  );
};

export default ArrayInJs;
