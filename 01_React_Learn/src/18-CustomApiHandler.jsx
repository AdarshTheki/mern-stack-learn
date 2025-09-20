import React, { useEffect } from 'react';
import axios from 'axios';

const CustomReactQuery = (urlPath) => {
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(urlPath, {
                    signal: controller.signal,
                });
                setData(response?.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })();

        // clean up code // Race condition avoid
        return () => controller.abort();
    }, [urlPath]);

    return { data, loading, error };
};


//  Main Components To Exports 

export default function App() {
    const [search, setSearch] = React.useState('');
    const { data, error, loading } = CustomReactQuery(`/api/products?search=${search}`);
    return (
        <div>
            <h2>Search option</h2>
            <input
                type='text'
                placeholder='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <hr />
            {loading && <h1>Loading...!</h1>}
            {error && <h1>Something want wrong?.</h1>}
            <h2>Hello Products</h2>
            <h2>Total Products are: {data.length} </h2>
        </div>
    );
}
