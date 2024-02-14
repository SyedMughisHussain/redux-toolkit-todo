import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "TODOS",
  initialState: {
    todos: [{
        id: nanoid(),
        text: "Hello World"
    }],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload
      });
    },
    test: (state, action) => {
        console.log(action);
    }
  },
});

export const {addTodo, test} = todoSlice.actions;
export default todoSlice.reducer;
