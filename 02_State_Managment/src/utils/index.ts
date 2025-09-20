export const sortTodos = (todos: TodoItem[], str: string): TodoItem[] => {
  return [...todos].sort((a, b) => {
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
  });
};

export const fetchTodos = async (): Promise<TodoItem[]> => {
  const res = await fetch('https://dummyjson.com/todos?limit=5');
  const data = await res.json();

  return data?.todos?.length > 0
    ? data.todos.map((i: { userId: number; todo: string; completed: boolean }) => ({
        id: i.userId,
        title: i.todo,
        completed: i.completed,
      }))
    : [];
};
