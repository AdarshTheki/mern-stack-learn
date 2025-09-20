/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react';

export default function Test() {
    // Data
    const initialData = Array.from({ length: 10 }, (_, index) => `Item ${index}`);
    return (
        <div>
            <LoadMoreData initialData={initialData} title='My Data' />
        </div>
    );
}

function LoadMoreData({ initialData = [], title = '' }) {
    const [data, setData] = useState(initialData);

    const fetchMoreData = () => {
        // Example: Fetch additional data from an API
        const newData = Array.from({ length: 15 }, (_, index) => `Item ${data.length + index}`);
        setData((prev) => [...prev, ...newData]);
    };

    const RenderItem = useCallback(({ item }) => <h2>{item}</h2>, []);

    return (
        <div>
            <h2>{title}</h2>
            <div>
                {data.map((item) => (
                    <RenderItem key={item} item={item} />
                ))}
            </div>
            <button onClick={() => fetchMoreData()}>Load More Data...</button>
        </div>
    );
}
