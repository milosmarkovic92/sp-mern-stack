import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Input from "../../formFields/Input";

function EditCharacter(props) {
  const [character, setCharacter] = useState({});
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    picture: "",
    age: null,
    occupation: "",
    quote: "",
    father: "",
    mother: "",
    brother: "",
    sister: ""
  });
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [picture, setPicture] = useState("");
  //   const [age, setAge] = useState();
  //   const [occupation, setOccupation] = useState("");
  //   const [quote, setQuote] = useState("");
  //   const [father, setFather] = useState("");
  //   const [mother, setMother] = useState("");
  //   const [brother, setBrother] = useState("");
  //   const [sister, setSister] = useState("");
  const [isSent, setIsSent] = useState(false);

  const id = props.match.params.id;

  useEffect(() => {
    fetch(`http://localhost:5000/api/characters/${id}`)
      .then(response => response.json())
      .then(parsedJSON => {
        setCharacter(parsedJSON);
        setInputs({
          firstName: parsedJSON.firstName,
          lastName: parsedJSON.lastName,
          picture: parsedJSON.picture,
          age: parsedJSON.age,
          occupation: parsedJSON.occupation,
          quote: parsedJSON.quote,
          father: parsedJSON.relatives.father,
          mother: parsedJSON.relatives.mother,
          brother: parsedJSON.relatives.brother,
          sister: parsedJSON.relatives.sister
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
      body: JSON.stringify({
        inputs
      })
    })
      .then(() => setIsSent(true))
      .catch(err => console.log(err));
  };

  return (
    <div className="add-new-container">
      <div className="add-new-form" key={character._id}>
        <form onSubmit={editCharHandler}>
          <Input
            label="First Name*"
            name="firstName"
            type="text"
            onChange={e => setInputs({ firstName: e.target.value })}
            value={inputs.firstName}
          />
          <Input
            label="Last Name*"
            name="lastName"
            type="text"
            onChange={e => setInputs({ lastName: e.target.value })}
            value={inputs.lastName}
          />
          <Input
            label="Picture url*"
            name="picture"
            type="url"
            onChange={e => setInputs({ picture: e.target.value })}
            value={inputs.picture}
          />
          <Input
            label="Age*"
            name="age"
            type="number"
            onChange={e => setInputs({ age: e.target.value })}
            value={inputs.age}
          />
          <Input
            label="Occupation*"
            name="occupation"
            type="text"
            onChange={e => setInputs({ occupation: e.target.value })}
            value={inputs.occupation}
          />
          <Input
            label="Quote*"
            name="quote"
            type="text"
            onChange={e => setInputs({ quote: e.target.value })}
            value={inputs.quote}
          />
          <Input
            label="Father"
            name="father"
            type="text"
            onChange={e => setInputs({ father: e.target.value })}
            value={inputs.father}
          />
          <Input
            label="Mother"
            name="mother"
            type="text"
            onChange={e => setInputs({ mother: e.target.value })}
            value={inputs.mother}
          />
          <Input
            label="Brother"
            name="brother"
            type="text"
            onChange={e => setInputs({ brother: e.target.value })}
            value={inputs.brother}
          />
          <Input
            label="Sister"
            name="sister"
            type="text"
            onChange={e => setInputs({ sister: e.target.value })}
            value={inputs.sister}
          />
          <Button variant="outline-info">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default EditCharacter;
