import React, { useState } from "react";
function Post(props) {
  return (
    <>
      <p>{props.title}</p>
      <h4>{props.job}</h4>
      <img src={props.src} alt="image" width="300px" height={500} />
    </>
  );
}
const PropsState = () => {
  /* prop is object contains attributes to describe for react element
  -prop value forward from parent to children and children not change this value 
  -react element :
  + use prop like attribute of the html tag
  + 2 props class, for -> className , htmlFor
  + follow rules intrinsic
  -react component:
  +use props like logarithm for component(function)
  +free to name prop:
  *Note :
    + props key is props special
    + props is argument 
-prop create diversity component
  
  */
  /* state
 state was created and manage current component
 state used for value capable change
  */
  const [title, setTitle] = useState("my name is : nguyen song ngan");
  console.log(title);
  return (
    <>
      <p>Prop and state</p>
      <Post
        title={title}
        job=" im a frontend developer"
        src="/image/DayChuyen13.png"
      />
      <div>
        <button
          onClick={() => setTitle("new values")}
          style={{ width: "300px", height: "150px" }}
        >
          change array
        </button>
      </div>
    </>
  );
};

export default PropsState;
