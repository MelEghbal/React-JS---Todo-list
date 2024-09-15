import React from "react";

export default function ToDoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <div>
      <header>
        <input
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          placeholder="Enter any task..."
        ></input>
        <button
          onClick={() => {
            handleAddTodos(todoValue);
            setTodoValue("");
          }}
        >
          Add
        </button>
      </header>
    </div>
  );
}
