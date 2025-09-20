import React, { useState } from 'react';

type CreateTodoType = {
  createTodo: (v: TodoItem) => void;
};

const TodoAdd = ({ createTodo }: CreateTodoType) => {
  const [todo, setTodo] = useState('');

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      createTodo({ title: todo, completed: false, id: Math.floor(100 + Math.random() * 900) });
      setTodo('');
    }
  };

  return (
    <form className='flex gap-2' onSubmit={addTodoHandler}>
      <input
        type='text'
        placeholder='Write Todo...'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type='submit' className='text-nowrap'>
        Add Todo
      </button>
    </form>
  );
};

export default TodoAdd;
