import { useState } from 'react';
import { products } from './dummyData';

function DragAndDropSides() {
    const [todos, setTodos] = useState(products.map((item) => ({ ...item, status: 'wip' })));

    function handleDragStart(event, id) {
        event.dataTransfer.setData('id', id);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDropSides(event, status) {
        const draggedId = event.dataTransfer.getData('id');
        setTodos(
            todos.map((todoItem) =>
                todoItem.id == draggedId ? { ...todoItem, status: status } : todoItem
            )
        );
    }

    function render(status) {
        return todos
            .slice(0, 10)
            .filter((t) => t.status === status)
            .map((item) => (
                <div
                    key={item.id}
                    className='todo-card'
                    draggable
                    onDragStart={(event) => handleDragStart(event, item.id)}>
                    {item.title}
                </div>
            ));
    }

    return (
        <div className='drag-and-drop-board'>
            <div
                className='work-in-progress'
                onDrop={(e) => handleDropSides(e, 'wip')}
                onDragOver={handleDragOver}>
                <h4>In Progress:</h4>
                {render('wip')}
            </div>
            <div
                className='completed'
                onDrop={(e) => handleDropSides(e, 'completed')}
                onDragOver={handleDragOver}>
                <h4>Completed:</h4>
                {render('completed')}
            </div>
        </div>
    );
}

export default DragAndDropSides;
