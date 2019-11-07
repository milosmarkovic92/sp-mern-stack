import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import Pagination from "../../../pagination/Pagination";
import "./Characters.css";

function Characters({ searchCharacters, handleChange, handleSubmit }) {
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(3);

  useEffect(() => {
    const funct = async () => {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/characters");
      const data = await res.json();
      setCharacterList(data);
      setLoading(false);
    };

    funct();
  }, []);

  // Current characters
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characterList.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );
  const searchedCharacters = searchCharacters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  if (loading) {
    return (
      <div className="characters-container">
        <h1>Loading characters</h1>
        <div class="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="characters-container">
        <div>
          <input
            type="text"
            placeholder="Search characters..."
            className="search"
            onChange={handleChange}
            onKeyUp={handleSubmit}
          />
        </div>
        <Link className="add-new" to="/characters/new">
          <Button variant="outline-info">Add New</Button>
        </Link>
        <h1>List of characters</h1>
        <div className="characters">
          <ul>
            {searchCharacters.length > 0
              ? searchedCharacters.map(characters => (
                  <li key={characters._id}>
                    <Link to={"/characters/" + characters._id}>
                      {characters.firstName} {characters.lastName}
                    </Link>
                    <hr />
                  </li>
                ))
              : currentCharacters.map(item => (
                  <li key={item._id}>
                    <Link to={"/characters/" + item._id}>
                      {item.firstName} {item.lastName}
                    </Link>
                    <hr />
                  </li>
                ))}
          </ul>
        </div>
        {searchCharacters.length > 0 ? (
          <Pagination
            charactersPerPage={charactersPerPage}
            totalCharacters={searchCharacters.length}
            paginate={paginate}
          />
        ) : (
          <Pagination
            charactersPerPage={charactersPerPage}
            totalCharacters={characterList.length}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
}

export default Characters;
