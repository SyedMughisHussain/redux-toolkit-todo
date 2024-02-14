import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo } from "../features/Todo/todoSlice";

const ShowTodo = () => {
  const data = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <>
      {data.length === 0 ? (
        <h1>No todo Added yet</h1>
      ) : (
        data.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.text}</h1>
              <button
                onClick={() => {
                  dispatch(editTodo(index));
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  dispatch(removeTodo(index));
                }}
              >
                Delete
              </button>
            </div>
          );
        })
      )}
    </>
  );
};

export default ShowTodo;
