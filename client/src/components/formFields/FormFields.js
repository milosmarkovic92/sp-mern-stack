import React from "react";
import Input from "./Input";

function FormFields(props) {
  const { inputs, setInputs } = props;
  return (
    <div>
      <Input
        label="First Name*"
        name="firstName"
        type="text"
        onChange={e => setInputs({ ...inputs, firstName: e.target.value })}
        value={inputs.firstName}
      />
      <Input
        label="Last Name*"
        name="lastName"
        type="text"
        onChange={e => setInputs({ ...inputs, lastName: e.target.value })}
        value={inputs.lastName}
      />
      <Input
        label="Picture url*"
        name="picture"
        type="url"
        onChange={e => setInputs({ ...inputs, picture: e.target.value })}
        value={inputs.picture}
      />
      <Input
        label="Age*"
        name="age"
        type="number"
        onChange={e => setInputs({ ...inputs, age: e.target.value })}
        value={inputs.age}
      />
      <Input
        label="Occupation*"
        name="occupation"
        type="text"
        onChange={e => setInputs({ ...inputs, occupation: e.target.value })}
        value={inputs.occupation}
      />
      <Input
        label="Quote*"
        name="quote"
        type="text"
        onChange={e => setInputs({ ...inputs, quote: e.target.value })}
        value={inputs.quote}
      />
      <Input
        label="Father"
        name="father"
        type="text"
        onChange={e =>
          setInputs({
            ...inputs,
            relatives: { ...inputs.relatives, father: e.target.value }
          })
        }
        value={inputs.relatives.father}
      />
      <Input
        label="Mother"
        name="mother"
        type="text"
        onChange={e =>
          setInputs({
            ...inputs,
            relatives: { ...inputs.relatives, mother: e.target.value }
          })
        }
        value={inputs.relatives.mother}
      />
      <Input
        label="Brother"
        name="brother"
        type="text"
        onChange={e =>
          setInputs({
            ...inputs,
            relatives: { ...inputs.relatives, brother: e.target.value }
          })
        }
        value={inputs.relatives.brother}
      />
      <Input
        label="Sister"
        name="sister"
        type="text"
        onChange={e =>
          setInputs({
            ...inputs,
            relatives: { ...inputs.relatives, sister: e.target.value }
          })
        }
        value={inputs.relatives.sister}
      />
    </div>
  );
}

export default FormFields;
