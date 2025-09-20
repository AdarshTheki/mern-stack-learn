import React, { useEffect } from 'react';
import axios from 'axios';

export default function App() {
    const [search, setSearch] = React.useState('');
    const { products, error, loading } = CustomReactQuery(`/api/products?search=${search}`);

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
            {products.length > 0 ? products.map((item) => <p key={item.id}>{item.title}</p>) : null}
            <h2>Number of Products are: {products.length} </h2>
        </div>
    );
}

const CustomReactQuery = (urlPath) => {
    const [products, setProducts] = React.useState([]);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            setLoading(true);
            setError(false);
            try {
                const response = await axios.get(urlPath, {
                    signal: controller.signal,
                });
                setProducts(response?.data);
                console.log(response?.data);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('req canceled:- ', error.message);
                    return;
                }
                setError(true);
            } finally {
                setLoading(false);
            }
        })();

        // clean up code // Race condition avoid
        return () => controller.abort();
    }, [urlPath]);

    return { products, loading, error };
};
