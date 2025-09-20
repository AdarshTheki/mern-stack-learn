import React, { useState } from 'react';

export default function LocalStorage() {
    const [value, setValue, removeValue] = useLocalStorage('myKey', 'Adarsh Verma');

    return (
        <div>
            <p>Storage Value: {value}</p>
            <button onClick={() => setValue('New Value')}>Set Value</button>
            <button onClick={removeValue}>Remove Value</button>
        </div>
    );
}

// Create the Custom Hook for Local Storage :
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log('Error getting item from localStorage:', error);
            return initialValue;
        }
    });

    function setItem(value) {
        try {
            const item = value instanceof Function ? value(storedValue) : value;
            setStoredValue(item);
            window.localStorage.setItem(key, JSON.stringify(item));
        } catch (error) {
            console.log('Error getting item from localStorage:', error);
        }
    }

    function removeItem() {
        try {
            window.localStorage.removeItem(key);
            setStoredValue(null);
        } catch (error) {
            console.log('Error getting item from localStorage:', error);
        }
    }
    return [storedValue, setItem, removeItem];
}
