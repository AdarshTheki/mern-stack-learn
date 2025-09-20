import { useEffect } from 'react';
import TodoAdd from './TodoAdd.tsx';
import TodoCard from './TodoCard.tsx';

const Todos = ({
  todos,
  count,
  sortTodos,
  fetchTodos,
  createTodo,
  deleteTodo,
  toggleCompleted,
  updateTodo,
  decrease,
  increase,
  reset,
}: TodosState & CountState) => {
  const orderOptions = [
    { label: 'id asc', value: 'id-asc' },
    { label: 'id desc', value: 'id-desc' },
    { label: 'title asc', value: 'title-asc' },
    { label: 'title desc', value: 'title-desc' },
  ];

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='mb-8 py-4 border-b w-full'>
      <div className='flex items-center gap-2 my-5'>
        <h1>Count: {count}</h1>
        <button onClick={() => increase(1)}>Increase</button>
        <button onClick={() => decrease(1)}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className='w-full my-2 gap-2 flex flex-wrap items-center'>
        {/* Todo form goes here */}
        <TodoAdd createTodo={createTodo} />
        {/* sort option */}
        <button>
          <select
            name='orderBy'
            id='orderBy'
            className='outline-none border-none cursor-pointer'
            onChange={(e) => sortTodos(e.target.value)}>
            {orderOptions.map((i) => (
              <option
                className='uppercase bg-indigo-600 text-white !p-2'
                value={i.value}
                key={i.value}>
                {i.label}
              </option>
            ))}
          </select>
        </button>
      </div>
      <div className='flex flex-wrap gap-y-3'>
        {/*Loop and Add TodoItem here */}
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
