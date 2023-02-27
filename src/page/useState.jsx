import React, { useState } from "react";
const UseState = () => {
  /* useState */
  const [counter, setCouter] = useState(1);
  const [job, setjob] = useState("");
  const [jobs, setjobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs;
  });
  const hanleSubmit = () => {
    setjobs((prev) => {
      const newJob = [...prev, job];

      //Save to local store
      const jsonJobs = JSON.stringify(newJob);
      localStorage.setItem("jobs", jsonJobs);
      return newJob;
    });
    setjob("");
  };
  return (
    <div style={{ padding: "50px" }}>
      <p>useState </p>
      <h1>{counter}</h1>
      <button
        onClick={() => setCouter(counter + 1)}
        style={{ width: "150px", height: "150px" }}
      >
        increase
      </button>
      <div style={{ padding: 32 }}>
        <input
          type="text"
          value={job}
          onChange={(e) => setjob(e.target.value)}
        />
        <button onClick={hanleSubmit}>Add</button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseState;
