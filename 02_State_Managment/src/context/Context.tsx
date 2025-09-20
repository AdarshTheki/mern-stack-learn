import React, { useContext, useState } from 'react';
import { AllContext } from './store';
import Todos from '../components/Todos';
import { fetchTodos as fetchTodosUtils, sortTodos as sortTodosUtils } from '../utils';

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const values = {
    count,
    todos,
    decrease: (val: number) => setCount(count > 0 ? count - val : 0),

    increase: (val: number) => setCount(count + val),

    reset: () => setCount(0),

    createTodo: (item: TodoItem) => setTodos((prev) => [...prev, item]),

    updateTodo: (item: TodoItem) =>
      setTodos((prev) => prev.map((i) => (i.id === item.id ? { ...i, title: item.title } : i))),

    deleteTodo: (id: number) => setTodos((prev) => prev.filter((i) => i.id !== id)),

    fetchTodos: async () => setTodos(await fetchTodosUtils()),

    sortTodos: (str: string) => setTodos((prev) => sortTodosUtils(prev, str)),

    toggleCompleted: (id: number) =>
      setTodos((prev) => prev.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i))),
  };
  return <AllContext.Provider value={values}>{children}</AllContext.Provider>;
};

const Context = () => {
  const {
    count,
    todos,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleCompleted,
    fetchTodos,
    sortTodos,
    decrease,
    increase,
    reset,
  } = useContext(AllContext);

  return (
    <Todos
      count={count}
      todos={todos}
      createTodo={createTodo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
      toggleCompleted={toggleCompleted}
      fetchTodos={fetchTodos}
      sortTodos={sortTodos}
      decrease={decrease}
      increase={increase}
      reset={reset}
    />
  );
};
const App = () => {
  return (
    <ContextProvider>
      <Context />
    </ContextProvider>
  );
};

export default App;
