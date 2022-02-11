import React from "react";
import Project1 from "./Project-1/Project1";
import Project2 from "./Project-2/Project2";
import Project3 from "./Project-3/Project3";
import "./project.css";

function Project() {
  return (
    <>
      <h1
        className="h1"
        style={{ marginTop: "40px", fontFamily: "'Roboto', sans-serif" }}
      >
        Projects
      </h1>
      <div className="project">
        <div className="projectcontent">
        <Project3/>
        <Project1 />
        <Project2/>
        </div>
      </div>
    </>
  );
}

export default Project;
