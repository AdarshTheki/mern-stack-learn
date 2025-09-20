import React from 'react';

// Custom Progress Bar Component
const ProgressBar = ({ progress, id }) => {
    return (
        <div>
            <div style={{ border: '1px solid #333', margin: '5px', width: '300px' }}>
                <meter value={progress} min='0' max='100' style={{ width: '100%' }}></meter>
                {id} = {progress | 0}% out of 100%
            </div>
            <div style={{ border: '1px solid #333', margin: '5px', width: '300px' }}>
                <progress value={progress} min='0' max='100' style={{ width: '100%' }}></progress>
                {id} = {progress | 0}% out of 100%
            </div>
        </div>
    );
};

// Main Component
const ProgressList = () => {
    const progressBars = Array.from({ length: 3 }, (_, index) => ({
        id: `Index${index}`,
        progress: Math.random() * 100,
    }));

    return (
        <div>
            <div>
                {progressBars.map((bar) => (
                    <ProgressBar key={bar.id} {...bar} />
                ))}
            </div>
        </div>
    );
};

export default ProgressList;
