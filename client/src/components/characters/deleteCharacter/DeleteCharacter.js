import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "./DeleteCharacter.css";

function DeleteCharacter(props) {
  const { name, id } = props;
  const [show, setShow] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const redirectHandler = () => {
    setRedirect(true);
  };

  const redirectingHandler = () => {
    return redirect ? <Redirect to="/characters" /> : null;
  };

  const deleteCharHandler = e => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/characters/${id}`, {
      method: "DELETE"
    })
      .then(handleClose)
      .then(redirectHandler)
      .catch(err => console.log(err));
  };

  return (
    <>
      {redirectingHandler()}
      <Button className="delete" variant="outline-danger" onClick={handleShow}>
        Delete {name}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {name}?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outline-danger" onClick={deleteCharHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteCharacter;
