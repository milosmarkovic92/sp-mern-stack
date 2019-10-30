import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Character.css";

function Character(props) {
  const [character, updatedCharacter] = useState([]);

  let id = props.match.params.id;
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/api/characters/${id}`)
      .then(response => response.json())
      .then(parsedJSON => updatedCharacter([parsedJSON]));
  }, []);
  return (
    <div>
      {character.map(char => {
        return (
          <div className="character-container">
            <Link className="add-new" to="/characters/new">
              <Button variant="outline-info">Add New</Button>
            </Link>
            <h1>
              {char.firstName} {char.lastName}
            </h1>
            <div className="character">
              <div className="one">
                <div className="avatar"></div>
                <h6>Quote</h6>
                <p>"{char.quote}"</p>
              </div>
              <div className="two">
                <h6>Age</h6>
                <p>{char.age}</p>
                <h6>Occupation</h6>
                <p>{char.occupation}</p>
                <h6>Relatives</h6>
                <p>
                  <b>Father:</b> {char.relatives.father}
                </p>
                <p>
                  <b>Mother:</b> {char.relatives.mother}
                </p>
                <p>
                  <b>Brother:</b> {char.relatives.brother}
                </p>
                <p>
                  <b>Sister:</b> {char.relatives.sister}
                </p>
              </div>
            </div>
            <Link className="edit" to="/characters/new">
              <Button variant="outline-info">Edit {char.firstName}</Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Character;
