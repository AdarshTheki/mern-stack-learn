import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
const getItems = (count) =>
    Array.from({ length: count }, (_, k) => k).map((k) => ({
        id: `item-${k}`,
        content: `item ${k} is Here !`,
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

export default function DndPackage() {
    const [todos, setTodos] = useState(getItems(20));

    // Handle drag and drop events
    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(todos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTodos(items);
    };

    const getListStyle = (isDraggingOver) => ({
        background: isDraggingOver ? 'lightblue' : 'lightgrey',
        display: 'block',
        flexWrap: 'wrap',
        gap: 20,
        padding: 8,
        width: 'fit-content',
    });

    const getItemStyle = (isDragging) => ({
        userSelect: 'none',
        background: isDragging ? 'green' : 'grey',
        color: isDragging ? 'lightblue' : 'lightgrey',
    });

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId='droppable' direction='auto'>
                {(provided, snap) => (
                    <div
                        style={getListStyle(snap.isDraggingOver)}
                        {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {todos.slice(0, 10).map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snap) => (
                                    <div
                                        style={getItemStyle(snap.isDragging)}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}>
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
