import { createContext } from 'react';

const counter: CountState = {
  count: 0,
  decrease() {},
  increase() {},
  reset() {},
};

const todo: TodosState = {
  todos: [],
  createTodo() {},
  deleteTodo() {},
  fetchTodos() {},
  sortTodos() {},
  toggleCompleted() {},
  updateTodo() {},
};

// Create Context
export const AllContext = createContext<CountState & TodosState>({ ...counter, ...todo });
