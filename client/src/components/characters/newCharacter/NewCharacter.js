import React, { useState } from "react";
import FormFields from "../../formFields/FormFields";
import { Button } from "react-bootstrap";
import "./NewCharacter.css";

function NewCharacter(props) {
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
  const [isSent, setIsSent] = useState(false);

  const newCharHandler = e => {
    e.preventDefault();
    fetch("http://localhost:5000/api/characters/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    }).then(() => setIsSent(true));
  };

  const thankYouMessage = <p>Thank you for your input!</p>;
  const form = (
    <form onSubmit={newCharHandler}>
      <FormFields setInputs={setInputs} inputs={inputs} />
      <Button type="submit" variant="outline-info">
        Submit
      </Button>
    </form>
  );

  return (
    <div className="add-new-container">
      <div className="add-new-form">{isSent ? thankYouMessage : form}</div>
    </div>
  );
}

export default NewCharacter;
