import React, { useEffect, useState } from 'react';
import { TodoProvider, useTodo } from './TodoProvider';
import './style.css';

function getLocalStorage() {
    const newTodos = JSON.parse(localStorage.getItem('todos'));
    if (newTodos && newTodos.length > 0) return newTodos;
    else return [];
}

export default function TodoList() {
    const [todos, setTodo] = useState(getLocalStorage());

    function addTodo(todo) {
        setTodo((prev) => [...prev, { id: Date.now(), ...todo }]);
    }

    function deleteTodo(id) {
        setTodo((prev) => prev.filter((item) => item.id !== id));
    }

    function updateTodo(id, content) {
        setTodo((prev) => prev.map((item) => (item.id === id ? { id, ...content } : item)));
    }

    function toggleComplete(id) {
        setTodo((prev) =>
            prev.map((item) => (item.id === id ? { ...item, complete: !item.complete } : item))
        );
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
            <div className='wrapper'>
                <h3>Add Todo:</h3>
                <TodoForm />
                <h3>Display Todo:</h3>
                <DisplayTodo />
            </div>
        </TodoProvider>
    );
}

function TodoForm() {
    const [todo, setTodo] = useState([]);
    const { addTodo } = useTodo();

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.length) {
            addTodo({ todo, complete: false });
            setTodo('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                name='todo'
                type='text'
                placeholder='enter todo text...'
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
            />
            <button>Add</button>
        </form>
    );
}

function DisplayTodo() {
    const { todos } = useTodo();
    const [filter, setFilter] = useState('all');
    const [orderBy, setOrderBy] = useState('asc');

    function filterTodo(text) {
        if (text === 'all') return todos;
        else if (text === 'complete') return todos.filter((item) => item.complete);
        else return todos.filter((item) => !item.complete);
    }
    const allFilter = filterTodo(filter);

    const filteredTodo = [...allFilter].sort((a, b) => {
        if (filter === 'all')
            return orderBy === 'asc' ? a.todo.localeCompare(b.todo) : b.todo.localeCompare(a.todo);
        else if (filter === 'complete')
            return orderBy === 'asc' ? a.todo.localeCompare(b.todo) : b.todo.localeCompare(a.todo);
        else return orderBy === 'asc' ? a.todo.localeCompare(b.todo) : b.todo.localeCompare(a.todo);
    });

    return (
        <div id='todos'>
            <select onChange={(e) => setFilter(e.target.value)} value={filter} name='filter'>
                <option value='all'>all</option>
                <option value='complete'>complete</option>
                <option value='Incomplete'>Incomplete</option>
            </select>
            <select onChange={(e) => setOrderBy(e.target.value)} value={orderBy} name='orderBy'>
                <option value='asc'>order A-Z</option>
                <option value='desc'>order Z-A</option>
            </select>

            <strong>
                Todos: {filteredTodo.length}, {filter}, {orderBy}
            </strong>

            <ul style={{ listStyle: 'numeric' }}>
                {filteredTodo?.map((item) => (
                    <ItemTodo key={item.id} {...item} />
                ))}
            </ul>
        </div>
    );
}

function ItemTodo({ id, todo, complete }) {
    const { toggleComplete, deleteTodo, updateTodo } = useTodo();
    const [text, setText] = useState(todo);
    const [edit, setEdit] = useState(false);

    function deleteHandler() {
        deleteTodo(id);
    }

    function toggleHandler() {
        toggleComplete(id);
    }

    function updateHandler(e) {
        e.preventDefault();
        updateTodo(id, { todo: text });
        setEdit(false);
    }

    return (
        <li id='todo-list'>
            <strong className={`${complete ? 'underline' : ''}`}>{todo}</strong>,
            <button id='btn' onClick={toggleHandler}>
                {complete ? 'Complete' : 'Incomplete'}
            </button>
            <button id='btn' onClick={deleteHandler}>
                delete
            </button>
            <button id='btn' onClick={() => setEdit(true)}>
                edit
            </button>
            {/* Editable content Modal*/}
            {edit && (
                <div id='form'>
                    <form onSubmit={updateHandler}>
                        <input
                            name='todoText'
                            type='text'
                            placeholder='update todo here...'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button id='btn'>Add</button>
                    </form>
                    <button onClick={() => setEdit(false)}>cancel</button>
                </div>
            )}
        </li>
    );
}
