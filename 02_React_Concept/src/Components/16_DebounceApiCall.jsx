import React, { useEffect } from 'react';
import { useState } from 'react';

export default function DebounceApiCall() {
    const [searchParam, setSearchParam] = useState('');

    const { data, error, pending } = useDebounce(searchParam, 4000);

    return (
        <div className='wrapper'>
            <input
                type='text'
                placeholder='Enter Value'
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
            />
            {pending ? <h3>Pending ! Please wait</h3> : null}
            {error ? <h3>Error ! Something Was Wrong!</h3> : null}
            <ul>
                {data && data.length > 0 ? (
                    data.map((item) => <li key={item.id}>{item.name}</li>)
                ) : (
                    <h3>No Recipes found ! Please try with different search</h3>
                )}
            </ul>
        </div>
    );
}

// Custom Hook Debounce Value
function useDebounce(query, delay = 1000) {
    const [debounceValue, setDebounceValue] = useState(null);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [pending, setPending] = useState(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceValue(query);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [query, delay]);

    useEffect(() => {
        async function fetchRecipes() {
            try {
                setError(null);
                setPending(true);
                const res = await fetch(`https://dummyjson.com/recipes/search?q=${debounceValue}`);
                const result = await res.json();
                setData(result.recipes);
            } catch (error) {
                setError(error);
            } finally {
                setPending(false);
            }
        }
        fetchRecipes();
    }, [debounceValue]);

    return { error, data, pending };
}
