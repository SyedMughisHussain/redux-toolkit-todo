import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo, test } from "../features/Todo/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const inputValue = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(inputValue.current.value));
    console.log(dispatch(test()));
    inputValue.current.value = "";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Todo App</h1>
        <input type="text" placeholder="Enter Todo" required ref={inputValue} />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddTodo;
