import React, { useState } from "react";
import $ from "jquery";

function App() {
  let [listArr, setListArr] = useState([]);
  let inputItem;

  function takeInput(e) {
    inputItem = e.target.value;
  }

  function gotClicked() {
    setListArr((oldList) => [...oldList, inputItem]);
    $("#listID").append("<li>" + inputItem + "</li>");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="inputItem"
          placeholder="add an item"
          required="required"
          onChange={takeInput}
        />
        <button onClick={gotClicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul id="listID">
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
