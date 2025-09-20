/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useRef, useState } from 'react';

// Infinity Scrolling : Loading Data on Demand

function InfinityScrolling({ renderListItem, getData, listData = [], query = '' }) {
    const pageNumber = useRef(1);
    const [loading, setLoading] = useState(false);

    const observer = useRef(null);

    const lastElementObserver = useCallback((node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                pageNumber.current += 1;
                fetchData();
            }
        });
        if (node) observer.current.observe(node);
    });

    const fetchData = useCallback(async () => {
        setLoading(true);
        await getData(query, pageNumber.current).finally(() => setLoading(false));
    }, [query, getData]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const renderList = useCallback(() => {
        if (listData.length === 0) {
            return <h2>Data Not Found !.</h2>;
        }
        return listData.map((item, index) => (
            <React.Fragment key={index}>
                {renderListItem(
                    item,
                    index,
                    index === listData.length - 1 ? lastElementObserver : null
                )}
            </React.Fragment>
        ));
    }, [listData, renderListItem, lastElementObserver]);

    return (
        <>
            {renderList()}
            <h2>{loading && '!! LOADING... !!'}</h2>
        </>
    );
}

export default function Test() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const controllerRef = useRef(null);

    const handleInput = useCallback((e) => {
        setQuery(e.target.value);
    }, []);

    const renderItem = useCallback(
        ({ title, category, description, brand, id }, key, ref) => (
            <div ref={ref} key={key}>
                <h2>{`${id}. ${title}`}</h2>
                <p>{`${category}, ${brand}`}</p>
                <p>{description}</p>
            </div>
        ),
        []
    );

    const getData = useCallback(async (query, pageNumber) => {
        try {
            if (controllerRef.current) controllerRef.current.abort();
            controllerRef.current = new AbortController();
            const response = await fetch(
                `https://dummyjson.com/products?${new URLSearchParams({
                    limit: query,
                    skip: pageNumber * 20,
                })}`,
                { signal: controllerRef.current.signal }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData((prev) => [...prev, ...result.products]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);

    console.log(data);

    return (
        <div className='wrapper'>
            <label>
                Limit Set:
                <input type='text' value={query} onChange={handleInput} />
            </label>
            <InfinityScrolling
                renderListItem={renderItem}
                listData={data}
                getData={getData}
                query={query}
            />
        </div>
    );
}
