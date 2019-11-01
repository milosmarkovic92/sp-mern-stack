import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import FormFields from "../../formFields/FormFields";

function EditCharacter(props) {
  const [character, setCharacter] = useState({});
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

  const id = props.match.params.id;

  useEffect(() => {
    fetch(`http://localhost:5000/api/characters/${id}`)
      .then(response => response.json())
      .then(parsedJSON => {
        setCharacter(parsedJSON);
        // getting values from database and setting to state
        setInputs({
          firstName: parsedJSON.firstName,
          lastName: parsedJSON.lastName,
          picture: parsedJSON.picture,
          age: parsedJSON.age,
          occupation: parsedJSON.occupation,
          quote: parsedJSON.quote,
          relatives: {
            father: parsedJSON.relatives.father,
            mother: parsedJSON.relatives.mother,
            brother: parsedJSON.relatives.brother,
            sister: parsedJSON.relatives.sister
          }
        });
      })
      .catch(err => console.log(err));
  }, [id]);

  const editCharHandler = e => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/characters/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    })
      .then(() => setIsSent(true))
      .catch(err => console.log(err));
  };

  const thankYouMessage = <p>Thank you for your input!</p>;
  const form = (
    <div key={character._id}>
      <form onSubmit={editCharHandler}>
        <FormFields setInputs={setInputs} inputs={inputs} />
        <Button type="submit" variant="outline-info">
          Submit
        </Button>
      </form>
    </div>
  );

  return (
    <div className="add-new-container">
      <div className="add-new-form">{isSent ? thankYouMessage : form}</div>
    </div>
  );
}

export default EditCharacter;
