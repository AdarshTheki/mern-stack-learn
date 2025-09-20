import { createStore } from 'redux';
import { sortTodos } from '../utils';

export enum ActionType {
  CREATE_TODO = 'CREATE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  SORT_TODO = 'SORT_TODO',
  FETCH_TODO = 'FETCH_TODO',
  INCREASE_COUNT = 'INCREASE_COUNT',
  DECREASE_COUNT = 'DECREASE_COUNT',
  RESET_COUNT = 'RESET_COUNT',
}

interface InitialState {
  count: number;
  todos: TodoItem[];
}

const initialState: InitialState = {
  count: 0,
  todos: [],
};

type INCREASE_COUNT = {
  type: ActionType.INCREASE_COUNT;
  payload: number;
};

type DECREASE_COUNT = {
  type: ActionType.DECREASE_COUNT;
  payload: number;
};

type RESET_COUNT = {
  type: ActionType.RESET_COUNT;
};

type CREATE_TODO = {
  type: ActionType.CREATE_TODO;
  payload: TodoItem;
};

type UPDATE_TODO = {
  type: ActionType.UPDATE_TODO;
  payload: TodoItem;
};

type DELETE_TODO = {
  type: ActionType.DELETE_TODO;
  payload: string;
};

type TOGGLE_TODO = {
  type: ActionType.TOGGLE_TODO;
  payload: string;
};

type SORT_TODO = {
  type: ActionType.SORT_TODO;
  payload: string;
};

type FETCH_TODO = {
  type: ActionType.FETCH_TODO;
  payload: TodoItem[];
};

type Action =
  | INCREASE_COUNT
  | DECREASE_COUNT
  | RESET_COUNT
  | CREATE_TODO
  | UPDATE_TODO
  | DELETE_TODO
  | TOGGLE_TODO
  | SORT_TODO
  | FETCH_TODO;

// Reducer: function to create pure function
const reducers = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
      break;
    case ActionType.DECREASE_COUNT:
      return {
        ...state,
        count: state.count > 0 ? state.count - action.payload : 0,
      };
      break;
    case ActionType.RESET_COUNT:
      return { ...state, count: 0 };
      break;
    case ActionType.FETCH_TODO:
      return { ...state, todos: action.payload };
      break;
    case ActionType.CREATE_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
      break;
    case ActionType.UPDATE_TODO:
      {
        const { id, title } = action.payload;
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id.toString() === id.toString() ? { ...todo, title } : todo
          ),
        };
      }
      break;
    case ActionType.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id.toString() !== action.payload.toString()),
      };
      break;
    case ActionType.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id.toString() !== action.payload.toString()
            ? todo
            : { ...todo, completed: !todo.completed }
        ),
      };
      break;
    case ActionType.SORT_TODO:
      return {
        ...state,
        todos: sortTodos(state.todos, action.payload),
      };
      break;
    default:
      return state;
  }
};

// Store: single store
export const rootStore = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
