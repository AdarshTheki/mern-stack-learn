import { create } from 'zustand';

// create count store callback and hold set argument
export const useCountStore = create<CountState>()((set) => ({
  count: 0,
  increase: (val) => set((state) => ({ count: state.count + val })),
  decrease: (val) => set((state) => ({ count: state.count > 0 ? state.count - val : 0 })),
  reset: () => set({ count: 0 }),
}));

// Create a Todo Lists: todos = [], create, update, delete, toggle complete, filter, sort & search by frontend side
export const useTodosStore = create<TodosState>()((set) => ({
  todos: [],
  fetchTodos: async () => {
    const res = await fetch('https://dummyjson.com/todos?limit=5');
    const data = await res.json();
    set({
      todos: data
        ? data?.todos?.map((i: { userId: number; todo: string; completed: boolean }) => ({
            id: i.userId,
            title: i.todo,
            completed: i.completed,
          }))
        : [],
    });
  },
  createTodo: (item) => set((state) => ({ todos: [...state.todos, item] })),
  updateTodo: (item) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === item.id ? { ...todo, item } : todo)),
    })),
  deleteTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  toggleCompleted: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  sortTodos: (str) =>
    set((state) => ({
      todos: state.todos.sort((a, b) => {
        if (str == 'id-asc') {
          return a.id - b.id;
        } else if (str == 'id-desc') {
          return b.id - a.id;
        } else if (str == 'title-desc') {
          return b.title.localeCompare(a.title);
        } else if (str == 'title-asc') {
          return a.title.localeCompare(b.title);
        } else {
          return a.id - b.id;
        }
      }),
    })),
}));
