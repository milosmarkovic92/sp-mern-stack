import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Pagination from "../../../pagination/Pagination";
import "./Characters.css";

function Characters(props) {
  const [characterList, setCharacterList] = useState([]);
  // const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(3);

  useEffect(() => {
    fetch("http://localhost:5000/api/characters")
      .then(response => response.json())
      .then(parsedJSON => setCharacterList(parsedJSON))
      .catch(err => console.log(err));
  }, []);
  // Current characters
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentPost = characterList.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="characters-container">
        <Link className="add-new" to="/characters/new">
          <Button variant="outline-info">Add New</Button>
        </Link>
        <h1>List of characters</h1>
        <div className="characters">
          <ul>
            {currentPost.map(item => {
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
        <Pagination
          charactersPerPage={charactersPerPage}
          totalCharacters={characterList.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Characters;
