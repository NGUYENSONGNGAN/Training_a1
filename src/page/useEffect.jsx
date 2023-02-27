import { tab } from "@testing-library/user-event/dist/tab";
import React, { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];
const UseEffect = () => {
  /* useEffect */
  // useEffect(callback)
  //- call callback every component rerender
  //-call callback after component add element in Dom
  // useEffect(callback,[])
  // call only one time after component mounted
  // useEffect(callback,[deps])
  //call callback when deps change
  //-------------
  //always call callback after component mounted
  //useEffect width DOM event
  //cleaup function always call before component unmounted
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  const [type, setType] = useState("posts");
  const [show, setShow] = useState(Boolean);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((post) => setPosts(post));
  }, [type]);
  const hanleSubmit = () => {};

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY >= 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handelScroll);
    // cleanup function
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  return (
    <div style={{ padding: "50px" }}>
      <h1>UseEffect</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={hanleSubmit}>Add</button>

      {tabs.map((tab) => {
        return (
          <button
            onClick={() => setType(tab)}
            key={tab}
            style={type === tab ? { color: "#fff", background: "black" } : {}}
          >
            {tab}
          </button>
        );
      })}
      {show && (
        <button style={{ position: "fixed", right: 50, bottom: 150 }}>
          go on top
        </button>
      )}
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title || post.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UseEffect;
