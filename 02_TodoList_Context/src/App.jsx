import React, { useEffect } from 'react';
import './App.css';
import { TodoProvider } from './context/index';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodo] = React.useState([]);
  const [filter, setFilter] = React.useState('all');
  const [orderBy, setOrderBy] = React.useState('asc');
  const [search, setSearch] = React.useState('');

  const addTodo = (todo) => {
    setTodo((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodo((prev) => prev.map((item) => (item.id === id ? { id, ...todo } : item)));
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setTodo((prev) =>
      prev.map((item) => (item.id === id ? { ...item, complete: !item.complete } : item))
    );
  };

  const filterTodo = (text) => {
    if (text === 'all') return todos;
    else if (text === 'complete') return todos.filter((item) => item.complete);
    else return todos.filter((item) => !item.complete);
  };
  const allFilter = filterTodo(filter);

  const filteredTodos = [...allFilter].sort((a, b) => {
    if (filter === 'all') {
      return orderBy === 'asc' ? a.todo.localeCompare(b.todo) : b.todo.localeCompare(a.todo);
    } else if (filter === 'active') {
      return orderBy === 'asc' ? a.todo.localeCompare(b.todo) : b.todo.localeCompare(a.todo);
    } else if (filter === 'complete') {
      return orderBy === 'asc' ? a.todo.localeCompare(b.todo) : b.todo.localeCompare(a.todo);
    }
    return 0;
  });

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos && todos.length > 0) setTodo(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage Your Todos</h1>
          <div className='mb-4'>
            {/* Todo form goes here */}
            <TodoForm todos={todos} />
          </div>
          {/* filter option */}
          <div className='w-full my-2 flex gap-10 justify-between items-center'>
            <select
              className='w-full border capitalize border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-2'
              name='filter'
              id='filter'
              value={filter}
              onChange={(e) => setFilter(e.target.value)}>
              <option className='bg-gray-800' value='all'>
                All
              </option>
              <option className='bg-gray-800' value='active'>
                active
              </option>
              <option className='bg-gray-800' value='complete'>
                Complete
              </option>
            </select>
            {/* sort option */}
            <select
              className='w-full border capitalize border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-2'
              name='orderBy'
              id='orderBy'
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}>
              <option className='bg-gray-800' value='asc'>
                sort a-z
              </option>
              <option className='bg-gray-800' value='desc'>
                sort z-a
              </option>
            </select>
            {/* Search Todo text */}
            <div>
              <input
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                type='text'
                placeholder='Search'
                className='border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
              />
            </div>
          </div>
          <div className='flex flex-wrap gap-y-3'>
            {/*Loop and Add TodoItem here */}
            {filteredTodos
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.todo.toLowerCase().includes(search);
              })
              .map((todo) => (
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}
