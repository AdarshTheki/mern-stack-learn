import React from 'react';
import { todoToggle, removeTodo, updateTodo } from '../app/todoSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

export default function TodoItem({ todos }) {
  const [todoMsg, setTodoMsg] = React.useState(todos.text);
  const [editable, setEditable] = React.useState(false);

  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(todoToggle(todos.id));
  };
  
  const updateHandler = () => {
    dispatch(updateTodo({ ...todos, text: todoMsg }));
    setEditable(false)
  };

  const removeHandler = () => {
    dispatch(removeTodo(todos.id));
  };

  return (
    <div
      className={`border my-2 rounded-lg shadow-md p-2 capitalize flex gap-3 ${
        todos.completed ? 'bg-[#67e071]' : 'bg-[#ccbed7]'
      }`}>
      <input type='checkbox' id={nanoid()}  checked={todos.completed} onChange={toggleHandler} />
      <input
        type='text'
        id={nanoid()}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!editable}
        className={`border outline-none w-full bg-transparent rounded-lg ${
          editable ? 'border-black/10 px-2 font-bold' : 'border-transparent'
        } ${todos.completed ? 'line-through' : ''}`}
      />
      <button
        onClick={() => {
          if (editable) {
            updateHandler();
          } else setEditable(!editable);
        }}
        disabled={todos.completed}>
        {editable ? '✔' : '✏'}
      </button>
      <button onClick={removeHandler}>❌</button>
    </div>
  );
}
