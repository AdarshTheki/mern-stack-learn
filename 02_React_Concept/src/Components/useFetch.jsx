import React, { useEffect, useState } from 'react';

// Create Custom Fetch hook
export default function useFetch(url, options = {}) {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(url, { ...options });
                if (!res.ok) throw new Error(res.statusText);

                const result = await res.json();
                setData(result);
                setError(null);
            } catch (err) {
                setError(err);
            } finally {
                setPending(false);
            }
        }

        fetchData();
    }, [url, options]);

    return { data, pending, error };
}
