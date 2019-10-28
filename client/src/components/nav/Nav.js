import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="nav-container">
      <div className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Nav;
