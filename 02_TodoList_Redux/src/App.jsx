import React from 'react';
import AddTodo from './components/AddTodo';
import TodoListing from './components/TodoListing';

export default function App() {
    return (
        <div className='bg-[#172842] min-h-screen'>
            <div className=' max-w-[600px] mx-auto'>
                <h1 className='text-2xl py-10 text-center'>Todo App with Redux ToolKite</h1>
                {/* Inputs todo */}
                <AddTodo />
                {/* Listing todos */}
                <TodoListing />
            </div>
        </div>
    );
}
