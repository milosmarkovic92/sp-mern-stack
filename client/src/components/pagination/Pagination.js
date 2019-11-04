import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.css";

function Pagination({ charactersPerPage, totalCharacters, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination-container">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <Link
              onClick={() => paginate(number)}
              to="/characters"
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
