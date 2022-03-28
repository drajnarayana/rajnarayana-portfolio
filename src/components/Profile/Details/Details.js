import React from "react";

import "./details.css";

export const Details=()=>{
    return (
        <div className="detailsbody">
          <div className="contentbody">
            <div className="smalldiv">
              <p className="hi">Hi, I am</p>
              <h1 className="name">Rajnarayana Dasari</h1>
              <p className="fullstack">
                Full Stack Web Developer 
              </p>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1o3gwrlC84YeLKc0nhNpuN-rSsJFnOxmL/view?usp=sharing"
              > 
                {" "}
                <button className="resume" >Resume</button>
              </a>
              <div style={{ marginTop: "20px" }}>
                <a target="_blank" href="https://github.com/drajnarayana">
                  <img
                    className="github"
                     src="https://img.icons8.com/glyph-neue/100/000000/github.png"
                    alt="github"
                  ></img>
                </a>
    
                <a target="_blank" href="https://www.linkedin.com/in/rajnarayana-dasari-63b245118/">
                  <img
                    className="linkedin"
                    src="/linkedin.svg"
                    alt="linkedin"
                  />
                </a>
                <a target="_blank" href="https://medium.com/@drajnarayana">
                  <img
                    className="linkedin"
                    src="https://img.icons8.com/material-rounded/50/000000/medium-logo.png"
                    alt="medium"
                  />
                </a>
              
              </div>
            </div>
          </div>
        </div>
      );
}