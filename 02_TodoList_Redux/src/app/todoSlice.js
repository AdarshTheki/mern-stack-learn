import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: nanoid(), text: 'Hello world! default message ?', completed: true },
    { id: nanoid(), text: 'This is second message ! ', completed: false },
  ],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    todoToggle: (state, { payload }) => {
      state.todos = state.todos.map((item) =>
        item.id === payload ? { ...item, completed: !item.completed } : item
      );
    },

    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },

    updateTodo: (state, { payload }) => {
      state.todos.map((item) => (item.id === payload ? { payload, ...item } : item));
    },

    // update
    // delete
  },
});
export const { addTodo, removeTodo, updateTodo, todoToggle } = todoSlice.actions;
export default todoSlice.reducer;
