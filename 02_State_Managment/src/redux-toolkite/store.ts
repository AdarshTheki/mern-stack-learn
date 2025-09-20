import {
  configureStore,
  createSlice,
  combineSlices,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit';
import { fetchTodos as fetchTodosUtils, sortTodos as sortTodosUtils } from '../utils';

// 1. create slice with pure function
// 2. store config
// 3. async thunk when call api (optional)
// 4. export and dispatch

// counter slice
const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { count: 0 },
  reducers: {
    increase: (state, action: PayloadAction<number>) => {
      return { ...state, count: state.count + action.payload };
    },
    decrease: (state, action: PayloadAction<number>) => {
      return { ...state, count: state.count > 0 ? state.count - action.payload : 0 };
    },
    reset: (state) => {
      return { ...state, count: 0 };
    },
  },
});
export const { decrease, increase, reset } = counterSlice.actions;

type InitialState = {
  todos: TodoItem[];
};

const initialState: InitialState = {
  todos: [],
};

// async thunk fetch async function
export const fetchTodo = createAsyncThunk<TodoItem[]>('todosSlice/fetchTodos', async () => {
  const res = await fetchTodosUtils();
  console.log(res);
  return res;
});

// create todo slice
const todoSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {
    sortTodos: (state, action: PayloadAction<string>) => {
      return { ...state, todos: sortTodosUtils(state.todos, action.payload) };
    },
    createTodo: (state, action: PayloadAction<TodoItem>) => {
      return { ...state, todos: [...state.todos, action.payload] };
    },
    updateTodo: (state, action: PayloadAction<TodoItem>) => {
      const { title, id } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)),
      };
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return { ...state, todos: state.todos.filter((i) => i.id !== action.payload) };
    },
    toggleCompleted: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        todos: state.todos.map((i) =>
          i.id === action.payload ? { ...i, completed: !i.completed } : i
        ),
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodo.fulfilled, (state, action: PayloadAction<TodoItem[]>) => {
        return { ...state, todos: action.payload || [] };
      })
      .addCase(fetchTodo.pending, (state) => {
        return { ...state };
      })
      .addCase(fetchTodo.rejected, (state) => {
        return { ...state };
      });
  },
});

export const { sortTodos, createTodo, deleteTodo, toggleCompleted, updateTodo } = todoSlice.actions;

// store.ts
export const store = configureStore({
  reducer: combineSlices(counterSlice, todoSlice),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
