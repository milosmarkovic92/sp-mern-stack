import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import logo from "../../assets/south-park-sign.png";
import Kenny from "../formFields/Kenny/Kenny";
import "./Navigation.css";

function Navigation({ handleChange, handleSubmit }) {
  return (
    <div className="nav-container">
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <img src={logo} alt="" width="50" height="50" />
        </Link>
        <Nav className="mr-auto">
          <Link to="/characters">Characters</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
        <Kenny />
        {/* <Form inline>
            <FormControl
              id="search"
              type="text"
              placeholder="Search characters..."
              className="mr-sm-2"
              onChange={handleChange}
              onKeyUp={handleSubmit}
            />
          </Form> */}
      </Navbar>
    </div>
  );
}

export default Navigation;
