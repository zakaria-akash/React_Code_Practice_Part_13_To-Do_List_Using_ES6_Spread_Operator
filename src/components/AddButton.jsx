import React from "react";

function AddButton(props) {
  return (
    <button onClick={props.addClick}>
      <span>Add</span>
    </button>
  );
}

export default AddButton;
