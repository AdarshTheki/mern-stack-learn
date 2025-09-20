import React, { useState } from 'react';
import { products } from './dummyData';

const DragAndDropLists = () => {
    const [items, setItems] = useState(products);

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('index', index.toString());
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragDrop = (e, dropIndex) => {
        const draggedIndex = parseInt(e.dataTransfer.getData('index'));
        const newItems = [...items];
        const draggedItem = newItems.splice(draggedIndex, 1)[0];
        newItems.splice(dropIndex, 0, draggedItem);
        setItems(newItems);
    };

    return (
        <div>
            {items.slice(0, 5).map((item, index) => (
                <div
                    key={item.id}
                    className='drag-and-drop-board-card'
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDragDrop(e, index)}>
                    {item.title}
                </div>
            ))}
        </div>
    );
};

export default DragAndDropLists;
