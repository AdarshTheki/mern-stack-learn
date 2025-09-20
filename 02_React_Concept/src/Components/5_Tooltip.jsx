/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { products } from './dummyData';

export default function Test() {
    return (
        <div>
            {products.slice(0, 10).map((item) => (
                <Tooltip key={item.id} text={item.title} position='bottom'>
                    <li>{item.description}</li>
                </Tooltip>
            ))}
        </div>
    );
}

function Tooltip({ text, children, position = 'top' }) {
    const [showTooltip, setShowTooltip] = useState(false);

    function handleMouseEnter() {
        setShowTooltip(true);
    }

    function handleMouseLeave() {
        setShowTooltip(false);
    }

    return (
        <div
            className='tooltip-container'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {showTooltip && (
                <p className='tooltip' style={{ [position]: '100%' }}>
                    {text}
                </p>
            )}
            {children}
        </div>
    );
}
