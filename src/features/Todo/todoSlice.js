import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "TODOS",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
      });
    },
    removeTodo: (state, action) => {
      //   1) 1st method to delete todo using filter
      //   state.todos = state.todos.filter((item) => item.id !== action.payload);
      //   2) 2nd method to delete todo using index in an array
      state.todos.splice(action.payload, 1);
    },
    editTodo: (state, action) => {
      const newValue = prompt("Enter the new todo value.");
      state.todos.splice(action.payload, 1, {
        id: nanoid(),
        text: newValue,
      });
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
