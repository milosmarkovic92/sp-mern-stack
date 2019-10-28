import React, { useState, useEffect } from "react";

function Characters(props) {
  const [characterList, updatedCharacterList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/characters")
      .then(response => response.json())
      .then(parsedJSON => updatedCharacterList(parsedJSON))
      .catch(err => console.log(err));
  });

  return (
    <div>
      <ul>
        {characterList.map(item => {
          return (
            <li key={item._id}>
              <p>{item.firstName}</p>
              <p>{item.lastName}</p>
              <p>{item.age}</p>
              <p>{item.occupation}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Characters;
