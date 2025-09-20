/// <reference types="vite/client" />

interface CountState {
  count: number;
  increase: (val: number) => void;
  decrease: (val: number) => void;
  reset: () => void;
}

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  todos: TodoItem[];
  fetchTodos: () => void;
  createTodo: (item: TodoItem) => void;
  updateTodo: (item: TodoItem) => void;
  deleteTodo: (id: number) => void;
  toggleCompleted: (id: number) => void;
  sortTodos: (type: string) => void;
}
