import React, { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todos: [
        { id: 1, todo: 'Todo One', complete: true },
        { id: 2, todo: 'Todo Two', complete: false },
        { id: 3, todo: 'Todo Three', complete: true },
    ],
    addTodo: () => {},
    deleteTodo: () => {},
    updateTodo: () => {},
    toggleComplete: () => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
