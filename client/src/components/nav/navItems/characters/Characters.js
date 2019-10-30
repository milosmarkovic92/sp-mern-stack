import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Characters.css";

function Characters(props) {
  const [characterList, updatedCharacterList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/characters")
      .then(response => response.json())
      .then(parsedJSON => updatedCharacterList(parsedJSON))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className="characters-container">
        <Link className="add-new" to="/characters/new">
          <Button variant="outline-info">Add New</Button>
        </Link>
        <h1>List of characters</h1>
        <div className="characters">
          <ul>
            {characterList.map(item => {
              return (
                <li key={item._id}>
                  <Link to={"/characters/" + item._id}>
                    {item.firstName} {item.lastName}
                  </Link>
                  <hr />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Characters;
