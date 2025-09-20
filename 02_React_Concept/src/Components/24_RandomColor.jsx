import React, { useState } from 'react';

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000');

    function colorUtility(colorLength) {
        return Math.floor(Math.random() * colorLength);
    }

    function createRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[colorUtility(hex.length)];
        }
        setColor(hexColor);
        setTypeOfColor('hex');
    }

    function createRandomRgbColor() {
        const r = colorUtility(256);
        const g = colorUtility(256);
        const b = colorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
        setTypeOfColor('rgb');
    }

    return (
        <div style={{ background: color }}>
            <button onClick={createRandomHexColor}>Create HEX Color</button>
            <button onClick={createRandomRgbColor}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? createRandomHexColor : createRandomRgbColor}>
                Generate Random Color
            </button>
            <h2>
                {typeOfColor === 'hex' ? 'HEX' : 'RGB'} Color : {color}
            </h2>
        </div>
    );
}
