import React from "react";

function InputField(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
      onChange={props.inputChanged}
      value={props.value}
    />
  );
}

export default InputField;
