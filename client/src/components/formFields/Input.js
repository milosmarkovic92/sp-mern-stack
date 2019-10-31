import React from "react";

function Input(props) {
  const { label, type, name, onChange, value } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} onChange={onChange} value={value} />
    </div>
  );
}

export default Input;
