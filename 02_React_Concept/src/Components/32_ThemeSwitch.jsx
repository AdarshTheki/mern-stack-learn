import React, { useState, useEffect } from 'react';

export default function ThemeSwitch() {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <div data-theme={theme}>
            <h3>Hello World!</h3>
            <button onClick={handleToggleTheme}>Change {theme} Mode</button>
        </div>
    );
}

// create custom hook to useLocalStorage
function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
        } catch (error) {
            console.log(error);
            currentValue = defaultValue;
        }
        return currentValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
