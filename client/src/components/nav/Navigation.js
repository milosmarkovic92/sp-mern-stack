import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from "../../assets/south-park-sign.png";
import "./Navigation.css";

function Navigation({ handleChange, handleSubmit }) {
  // const [characters, setCharacters] = useState([]);

  // const handleChange = e => {
  //   e.preventDefault();
  //   let searchValue = e.target.value;
  //   console.log(searchValue);
  //   fetch("http://localhost:5000/api/characters/search?search=" + searchValue)
  //     .then(response => response.json())
  //     .then(parsedJSON => setCharacters(parsedJSON));
  // };
  // console.log(characters);
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
        <Form inline onSubmit={handleSubmit}>
          <FormControl
            id="search"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={handleChange}
          />
          <Button type="submit" variant="outline-info">
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Navigation;
