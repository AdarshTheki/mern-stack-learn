import { Provider, useDispatch, useSelector } from 'react-redux';
import { rootStore, type RootState, ActionType } from './store';
import Todos from '../components/Todos';

const Redux = () => {
  return (
    <Provider store={rootStore}>
      <Container />
    </Provider>
  );
};
export default Redux;

const Container = () => {
  const { count, todos } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const createTodo = (item: TodoItem) => {
    dispatch({ type: ActionType.CREATE_TODO, payload: item });
  };

  const updateTodo = (item: TodoItem) => {
    dispatch({ type: ActionType.UPDATE_TODO, payload: item });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: ActionType.DELETE_TODO, payload: id });
  };

  const toggle = (id: number) => {
    dispatch({ type: ActionType.TOGGLE_TODO, payload: id });
  };

  const sortTodo = (str: string) => {
    dispatch({ type: ActionType.SORT_TODO, payload: str });
  };

  const fetchTodo = async () => {
    const res = await fetch('https://dummyjson.com/todos?limit=5');
    const data = await res.json();

    const payload: TodoItem[] = data
      ? data?.todos?.map((i: { userId: number; todo: string; completed: boolean }) => ({
          id: i.userId,
          title: i.todo,
          completed: i.completed,
        }))
      : [];

    dispatch({ type: ActionType.FETCH_TODO, payload });
  };

  const increase = () => {
    dispatch({ type: ActionType.INCREASE_COUNT, payload: 1 });
  };

  const decrease = () => {
    dispatch({ type: ActionType.DECREASE_COUNT, payload: 1 });
  };

  const reset = () => {
    dispatch({ type: ActionType.RESET_COUNT });
  };

  return (
    <Todos
      count={count}
      todos={todos}
      createTodo={createTodo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
      toggleCompleted={toggle}
      fetchTodos={fetchTodo}
      sortTodos={sortTodo}
      decrease={decrease}
      increase={increase}
      reset={reset}
    />
  );
};
