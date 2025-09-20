/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText } from '@mui/material';
import {  deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { getDB } from './firebase';
import './todo.css';

export default function TodoItem({ id, todoItem }) {
    const [editTodo, setEditTodo] = useState(false);
    const [todoValue, setTodoValue] = useState(todoItem?.todo);

    function handleDelete() {
        deleteDoc(doc(getDB, 'todos', id));
    }

    function handleUpdateTodo() {
        if (todoValue.length > 6 && id) {
            updateDoc(doc(getDB, 'todos', id), { todo: todoValue });
            setEditTodo(false);
        } else {
            alert('Input value must be at least 6 characters');
        }
    }

    return (
        <List className='todo-item'>
            <ListItem>
                {!editTodo ? (
                    <ListItemText primary={todoItem?.todo} />
                ) : (
                    <>
                        <TextField
                            id='todo'
                            label='edit todo'
                            value={todoValue}
                            onChange={(e) => setTodoValue(e.target.value)}
                            variant='outlined'
                            size='small'
                        />
                        <Button onClick={handleUpdateTodo} variant='contained' color='secondary'>
                            Add
                        </Button>
                    </>
                )}
            </ListItem>
            <Button onClick={() => setEditTodo(!editTodo)} variant='contained' color='primary'>
                {!editTodo ? 'Edit' : 'Cancle'}
            </Button>
            <Button onClick={handleDelete} variant='contained' color='warning'>
                Delete
            </Button>
        </List>
    );
}
