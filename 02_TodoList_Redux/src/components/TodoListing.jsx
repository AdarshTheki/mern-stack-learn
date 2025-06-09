import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState([]);

  const filterTodo = todos.filter((item) => {
    if (filter === 'all') {
      return item;
    } else if (filter === 'completed') {
      return item.completed;
    } else if (filter === 'active') {
      return !item.completed;
    }
  });

  return (
    <div>
      <h1 className='text-2xl text-blue-700 font-semibold my-4'>Todos Lists</h1>
      <div className='flex justify-between items-center'>
        <select
          name='filter'
          id='filter'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}>
          <option value='all'>All</option>
          <option value='active'>Active</option>
          <option value='completed'>Completed</option>
        </select>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          type='text'
          placeholder='search'
          className='border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        />
      </div>
      <ul className='flex flex-col card'>
        {filterTodo
          .filter((item) => {
            return search === '' ? item : item.text.toLowerCase().includes(search);
          })
          .map((item) => (
            <TodoItem key={item.id} todos={item} />
          ))}
      </ul>
    </div>
  );
}
