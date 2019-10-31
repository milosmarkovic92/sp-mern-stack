import React, { useState } from "react";
import Input from "../../formFields/Input";
import { Button } from "react-bootstrap";
import "./NewCharacter.css";

function NewCharacter(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [picture, setPicture] = useState("");
  const [age, setAge] = useState();
  const [occupation, setOccupation] = useState("");
  const [quote, setQuote] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [brother, setBrother] = useState("");
  const [sister, setSister] = useState("");
  const [isSent, setIsSent] = useState(false);

  const newCharHandler = e => {
    e.preventDefault();
    fetch("http://localhost:5000/api/characters/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        picture,
        age,
        occupation,
        quote,
        relatives: {
          father,
          mother,
          brother,
          sister
        }
      })
    })
      .then(() => setIsSent(true))
      .then(console.log(firstName));
  };

  const thankYouMessage = <p>Thank you for your input!</p>;
  const form = (
    <form onSubmit={newCharHandler}>
      <Input
        label="First Name*"
        name="firstName"
        type="text"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <Input
        label="Last Name*"
        name="lastName"
        type="text"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <Input
        label="Picture url*"
        name="picture"
        type="url"
        value={picture}
        onChange={e => setPicture(e.target.value)}
      />
      <Input
        label="Age*"
        name="age"
        type="number"
        value={age}
        onChange={e => setAge(e.target.value)}
      />
      <Input
        label="Occupation*"
        name="occupation"
        type="text"
        value={occupation}
        onChange={e => setOccupation(e.target.value)}
      />
      <Input
        label="Quote*"
        name="quote"
        type="text"
        value={quote}
        onChange={e => setQuote(e.target.value)}
      />
      <Input
        label="Father"
        name="father"
        type="text"
        value={father}
        onChange={e => setFather(e.target.value)}
      />
      <Input
        label="Mother"
        name="mother"
        type="text"
        value={mother}
        onChange={e => setMother(e.target.value)}
      />
      <Input
        label="Brother"
        name="brother"
        type="text"
        value={brother}
        onChange={e => setBrother(e.target.value)}
      />
      <Input
        label="Sister"
        name="sister"
        type="text"
        value={sister}
        onChange={e => setSister(e.target.value)}
      />
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
