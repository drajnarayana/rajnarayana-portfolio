import React from "react";
import  "./left.css";
function Left() {
  return (
    <div className="leftbody">
      <div className="wrapper">
        <div
          style={{
            color: "black",
            fontSize: "30px",
            fontFamily: "'Roboto', sans-serif",
            // paddingLeft: "20px",
            fontWeight: "900",
            width:"250px",
          
          }}
        >
          Have an idea?
        </div>
        <div
          style={{
            color: "#286DAB",
            // paddingLeft: "20px",
            fontSize: "20px",
            paddingTop: "10px",
            width:"250px",
           
            fontWeight: "700",
          }}
        >
          Let's Connect!!
        </div>
        <div className="maildiv">
        <img height="30px" width="30px" src="https://img.icons8.com/color/48/000000/gmail-new.png"/>

          <a href="rajnarayanadasari@gmail.com" style={{ textDecoration: "none" }}>
           
            <span style={{ paddingTop: "25px", cursor: "pointer" }}>
              rajnarayanadasari@gmail.com
            </span>
          </a>
        </div>
        
        <div className="phonediv">
        <img  height="30px" width="30px" src="https://img.icons8.com/ios/50/000000/phone.png"/>

          <span style={{ paddingTop: "10px", color: "black" }}>
            +91 9177907829
          </span>
        </div>
        <div className="icondiv">
          <a target="_blank" href="https://github.com/drajnarayana">
            <img className="img" src="https://img.icons8.com/glyph-neue/100/000000/github.png"/>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/rajnarayana-dasari-63b245118/">
            <img className="img" src="/linkedin.svg" alt="linkedin" />
          </a>
        
        </div>
      </div>
    </div>
  );
}

export default Left;
