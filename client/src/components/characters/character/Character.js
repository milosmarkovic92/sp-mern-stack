import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Character.css";

function Character(props) {
  const [character, setCharacter] = useState({});

  let id = props.match.params.id;
  useEffect(() => {
    fetch(`http://localhost:5000/api/characters/${id}`)
      .then(response => response.json())
      .then(parsedJSON => setCharacter(parsedJSON))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <div className="character-container">
        <Link className="add-new" to="/characters/new">
          <Button variant="outline-info">Add New</Button>
        </Link>
        <h1>
          {character.firstName} {character.lastName}
        </h1>
        <div className="character">
          <div className="one">
            <div className="avatar">
              <img src={character.picture} alt={character.firstName} />
            </div>
            <h6>Quote</h6>
            <p>"{character.quote}"</p>
          </div>
          <div className="two">
            <h6>Age</h6>
            <p>{character.age}</p>
            <h6>Occupation</h6>
            <p>{character.occupation}</p>
            <h6>Relatives</h6>
            {character.relatives ? (
              <div>
                <p>
                  <b>Father:</b> {character.relatives.father}
                </p>
                <p>
                  <b>Mother:</b> {character.relatives.mother}
                </p>
                <p>
                  <b>Brother:</b> {character.relatives.brother}
                </p>
                <p>
                  <b>Sister:</b> {character.relatives.sister}
                </p>
              </div>
            ) : null}
          </div>
        </div>
        <Link className="edit" to={"/characters/" + id + "/edit"}>
          <Button variant="outline-info">Edit {character.firstName}</Button>
        </Link>
      </div>
    </div>
  );
}

export default Character;
