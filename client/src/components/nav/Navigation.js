import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from "../../assets/south-park-sign.png";
import "./Navigation.css";

function Navigation(props) {
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
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
    // </div>
  );
}

export default Navigation;
