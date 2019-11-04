import React, { useState } from "react";
import FormFields from "../../formFields/FormFields";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import "./NewCharacter.css";

function NewCharacter(props) {
  const [redirect, setRedirect] = useState(false);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    picture: "",
    age: null,
    occupation: "",
    quote: "",
    relatives: {
      father: "",
      mother: "",
      brother: "",
      sister: ""
    }
  });

  const alertHandler = () => {
    Swal.fire({
      width: 200,
      position: "bottom-end",
      type: "success",
      customClass: "swal-wide",
      title: "Success!",
      showConfirmButton: false,
      timer: 2500
    });
  };

  const redirectHandler = () => {
    setRedirect(true);
  };

  const redirectingHandler = () => {
    return redirect ? <Redirect to="/characters" /> : null;
  };

  const newCharHandler = e => {
    e.preventDefault();
    fetch("http://localhost:5000/api/characters/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    })
      .then(redirectHandler)
      .catch(err => console.log(err));
  };

  return (
    <>
      {redirectingHandler()}
      <div className="add-new-container">
        <div className="add-new-form">
          <form onSubmit={newCharHandler}>
            <FormFields setInputs={setInputs} inputs={inputs} />
            <Button type="submit" variant="outline-info" onClick={alertHandler}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewCharacter;
