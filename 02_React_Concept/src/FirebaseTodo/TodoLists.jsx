/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';

import { addDoc, collection, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { getDB, getQuery } from './firebase';
import Todo from './TodoItem';

export default function TodoLists({ userInfo = {} }) {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        onSnapshot(getQuery, (snap) => {
            setTodos(
                snap.docs.map((todoItem) => ({
                    id: todoItem.id,
                    todoItem: todoItem.data(),
                }))
            );
        });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        // Create Todo Document
        if (inputValue.length > 6) {
            addDoc(collection(getDB, 'todos'), {
                todo: inputValue,
                timestamp: serverTimestamp(),
            });
            setInputValue('');
        } else {
            alert('Input value must be at least 6 characters');
        }
    }

    return (
        <div>
            <h4>Todo Lists Page: {`${userInfo?.name}` || 'Firebase'}</h4>
            <form onSubmit={handleSubmit}>
                <TextField
                    id='todo'
                    label='Create Todo'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    variant='outlined'
                    size='small'
                />
                <Button type='submit' variant='contained' color='primary'>
                    Add Todo
                </Button>
            </form>
            <ul>
                <h4>Todo Item Page : </h4>
                {todos && todos?.length ? (
                    todos?.map((todoItem) => <Todo key={todoItem.id} {...todoItem} />)
                ) : (
                    <h3>No todos available ! Please add one</h3>
                )}
            </ul>
        </div>
    );
}
