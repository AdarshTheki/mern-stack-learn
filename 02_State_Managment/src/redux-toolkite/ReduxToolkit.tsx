import { Provider, useDispatch, useSelector } from 'react-redux';
import {
  store,
  decrease,
  increase,
  reset,
  sortTodos,
  createTodo,
  deleteTodo,
  toggleCompleted,
  updateTodo,
  fetchTodo,
  type RootState,
  type AppDispatch,
} from './store';
import Todos from '../components/Todos';

const ReduxToolkit = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { count } = useSelector((s: RootState) => s.counterSlice);
  const { todos } = useSelector((s: RootState) => s.todosSlice);

  return (
    <Todos
      count={count}
      todos={todos}
      decrease={() => dispatch(decrease(1))}
      increase={() => dispatch(increase(1))}
      reset={() => dispatch(reset())}
      sortTodos={(str: string) => dispatch(sortTodos(str))}
      createTodo={(it: TodoItem) => dispatch(createTodo(it))}
      updateTodo={(it: TodoItem) => dispatch(updateTodo(it))}
      deleteTodo={(it: number) => dispatch(deleteTodo(it))}
      toggleCompleted={(it: number) => dispatch(toggleCompleted(it))}
      fetchTodos={() => dispatch(fetchTodo())}
    />
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ReduxToolkit />
    </Provider>
  );
};
export default App;
