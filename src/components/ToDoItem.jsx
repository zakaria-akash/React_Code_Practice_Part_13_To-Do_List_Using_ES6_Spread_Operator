import React, { useState } from "react";

function ToDoItem(props) {
  const [clickStatus, setClickStatus] = useState(false);
  function makeLineThrough() {
    setClickStatus((oldStatus) => !oldStatus);
  }
  return (
    <li
      style={{ textDecoration: clickStatus ? "line-through" : "none" }}
      onClick={makeLineThrough}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
