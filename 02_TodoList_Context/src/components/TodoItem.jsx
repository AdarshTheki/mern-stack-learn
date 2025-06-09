import React  from 'react';
import { useTodo } from '../context';

export default function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = React.useState(false);
  const [todoMsg, setTodoMsg] = React.useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.complete ? 'bg-[#67e071]' : 'bg-[#ccbed7]'
      }`}>
      <input
        type='checkbox'
        id={todo.id}
        className='cursor-pointer'
        checked={todo.complete}
        onChange={toggleCompleted}
      />
      <input
        type='text'
        id={todo.todo}
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? 'border-black/10 px-2 font-bold' : 'border-transparent'
        } ${todo.complete ? 'line-through' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
        onClick={() => {
          if (todo.complete) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.complete}>
        {isTodoEditable ? '➕' : '✏️'}
      </button>
      {/* Delete Todo Button */}
      <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        onClick={() => deleteTodo(todo.id)}>
        ❌
      </button>
    </div>
  );
}
