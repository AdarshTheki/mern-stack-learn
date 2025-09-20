import Todos from '../components/Todos';
import { useCountStore, useTodosStore } from './store';

const Zustand = () => {
  const countState = useCountStore();
  const todosState = useTodosStore();

  return <Todos {...todosState} {...countState} />;
};

export default Zustand;
