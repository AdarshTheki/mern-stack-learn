import React from 'react';
import { useTodo } from '../context';

export default function TodoForm() {
  const [todo, setTodo] = React.useState([]);
  const { addTodo } = useTodo();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (todo) {
      addTodo({ todo, complete: false });
      setTodo('');
    }
  };

  return (
    <form className='flex' onSubmit={addTodoHandler}>
      <input
        type='text'
        placeholder='Write Todo...'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
      />
      <button type='submit' className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'>
        Add
      </button>
    </form>
  );
}
