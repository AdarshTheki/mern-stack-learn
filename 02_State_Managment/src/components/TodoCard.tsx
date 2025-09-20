import { useState } from 'react';

type TodoCardProps = {
  todo: TodoItem;
  updateTodo: (v: TodoItem) => void;
  deleteTodo: (id: number) => void;
  toggleCompleted: (id: number) => void;
};

const TodoCard = ({ todo, updateTodo, deleteTodo, toggleCompleted }: TodoCardProps) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.title);

  const editTodo = () => {
    updateTodo({ completed: todo.completed, id: todo.id, title: todoMsg });
    setIsTodoEditable(false);
  };

  const toggle = () => {
    toggleCompleted(Number(todo.id));
  };

  return (
    <div
      className={`flex items-center w-full gap-4 p-2 rounded-lg ${
        todo.completed ? 'bg-[#67e071]' : 'bg-[#ccbed7]'
      }`}>
      <p>{todo.id}.</p>
      <input id={todo.id.toString()} type='checkbox' checked={todo.completed} onChange={toggle} />
      <input
        type='text'
        id={todo.title}
        className={`w-full ${!isTodoEditable && 'border-none outline-none'} ${
          todo.completed ? 'line-through' : ''
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}>
        {isTodoEditable ? 'Add' : 'Edit'}
      </button>
      {/* Delete Todo Button */}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoCard;
