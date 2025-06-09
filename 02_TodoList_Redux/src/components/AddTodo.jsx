import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../app/todoSlice';

export default function AddTodo() {
  const [input, setInput] = React.useState('');
  const dispatch = useDispatch();

  const addToHandler = (e) => {
    e.preventDefault();
    if (input) dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form className='flex' onSubmit={addToHandler}>
      <input
        type='text'
        placeholder='Write Todo...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
      />
      <button type='submit' className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'>
        Add
      </button>
    </form>
  );
}
