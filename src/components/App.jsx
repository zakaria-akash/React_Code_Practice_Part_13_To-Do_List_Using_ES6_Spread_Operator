import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  let [inputItem, setInputItem] = useState("");
  let [listArr, setListArr] = useState([]);

  function takeInput(e) {
    const newValue = e.target.value;
    setInputItem(newValue);
  }

  function gotClicked() {
    setListArr((oldList) => {
      return [...oldList, inputItem];
    });
    setInputItem("");
  }
  function deleteItem(id) {
    setListArr((oldItems) => {
      return oldItems.filter((item, index) => index !== id);
    });
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
          placeholder="add your work plan"
          required="required"
          onChange={takeInput}
          value={inputItem}
        />
        <button onClick={gotClicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listArr.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
