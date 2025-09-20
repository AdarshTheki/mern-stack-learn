const ADD_TODO = "ADD_TODO";
const TODO_TOGGLE = "TODO_TOGGLE";

// create the method to call
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text, id: nanoid() },
});

export const todoToggle = (id) => ({
  type: TODO_TOGGLE,
  payload: { id },
});

// create reducer function with types
export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });

    case TODO_TOGGLE:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    default:
      return state;
  }
};
