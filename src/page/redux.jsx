//import casual from "casual";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby } from "../actions/hobby";

const ReduxInReact = () => {
  //redux is a predictable state management tool for Javascript application
  //redux use uni-directional data flow
  //redux use single source of truth
  //redux state is read-only .if you want update must do dispash a action
  // changes of redux state will be performed by reducer
  //redux have to use javacript app,not only reactjs
  const hobby = useSelector((state) => state.hobby.list);
  //useSelector is a hook of the Redux Toolkit and React Redux, used to get data from the
  //Redux store and re-render the component when the data changes.
  const dispash = useDispatch();
  //useDispatch is a hook of the Redux Toolkit and React Redux
  //used to dispatch an action to the Redux store.
  console.log(hobby);
  const hanleSubmit = () => {
    const newHobby = {
      id: 2,
      title: "hobby1",
    };
    const action = addNewHobby(newHobby);
    dispash(action);
  };
  return (
    <div style={{ padding: "50px" }}>
      <p>Redux </p>
      <button onClick={hanleSubmit}>Add</button>
      <ul>
        {hobby.map((index) => (
          <li key={index.id}>{index.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReduxInReact;
