import React from "react";
import   "./Navbar.css";

function Navbar() {

  return (
    <div className="navbody">
      <div className="hs"><a style={{textDecoration:"none",color:"#286DAB"}} href="#home">RD</a></div>
      <div className="flexx">
        <a href="#home" className="a1">
          Home
        </a>
        <a href="#about" className="a2">
          About
        </a>
        <a href="#project" className="a3">
          Project
        </a>
        <a href="#skills" className="a4">
          Skills
        </a>
        <a href="#contact" className="a5">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
