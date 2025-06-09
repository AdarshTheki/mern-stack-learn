import { createContext, useContext } from 'react';

export const TodoContext = createContext({
  todos: [
    { id: 1, todo: 'Todo one', complete: true },
    { id: 2, todo: 'Todo two', complete: false },
    { id: 3, todo: 'Todo three', complete: true },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
