import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputField from "./InputField";
import AddButton from "./AddButton";

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
    console.log(listArr[listArr.length - 1]);
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
        <InputField
          type={"text"}
          name={"inputItem"}
          placeholder={"add your work plan"}
          required={"required"}
          inputChanged={takeInput}
          value={inputItem}
        />
        <AddButton addClick={gotClicked} />
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
