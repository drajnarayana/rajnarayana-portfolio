import React from "react";
import  "./left.css";
function Left() {
  return (
    <div className="leftbody">
      
        <h2>Get in Touch</h2>
        <div className="contactinfo">
          <div className="addressdiv">
          <img height="25px" width="25px" src="https://img.icons8.com/material-rounded/48/000000/marker.png"/>
            <h4>1-8-1/F-16/B-22/MIG-II,Baghlingampally,Hyderabad-500044</h4>
          </div>
          <div className="phonediv">
          <img  height="25px" width="25px" src="https://img.icons8.com/ios-glyphs/60/000000/phone--v1.png"/>
          <h4>+91 9177907829</h4>
          </div>
          <div className="maildiv">
          <a href = "mailto: rajnarayanadasari@gmail.com">
          <img height="25px" width="25px" src="https://img.icons8.com/material-rounded/24/000000/mail.png"/>
          </a>
          <h4>rajnarayanadasari@gmail.com</h4>
          </div>
      </div>
      <div className="icondiv">
      <a target="_blank" href="https://github.com/drajnarayana">
      <img src="https://img.icons8.com/material-sharp/48/000000/github.png" alt="github"/>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/rajnarayana-dasari-63b245118/">
          <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="linkedin"/>
          </a>
         
          <a href = "mailto: rajnarayanadasari@gmail.com">
          <img src="https://img.icons8.com/fluency/48/000000/gmail-new.png" alt="gmail"/>
          </a>

          <a target="_blank" href="https://medium.com/@drajnarayana">
          <img src="https://img.icons8.com/material-sharp/48/000000/medium-logo.png" alt="medium"/>
          </a>
     
      </div>
    </div>
  );
}

export default Left;
