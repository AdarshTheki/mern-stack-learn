import React, { useEffect, useState } from 'react';

export default function FilterCards() {
    const [products, setProducts] = useState([]);
    const [selectCategory, setSelectCategory] = useState('all');

    useEffect(() => {
        async function fetchApi() {
            const res = await fetch('https://dummyjson.com/products');
            const result = await res.json();
            setProducts(result.products);
        }
        fetchApi();
    }, []);

    const uniqueCategory = products.length
        ? ['all', ...new Set(products.map((item) => item.category))]
        : [];

    const filterProducts =
        selectCategory === 'all'
            ? products
            : products.filter((item) => item.category === selectCategory);

    return (
        <div>
            <ul>
                {uniqueCategory.map((category) => (
                    <button key={category} onClick={() => setSelectCategory(category)}>
                        {category}
                    </button>
                ))}
            </ul>
            <h3>Total : {filterProducts.length}</h3>
            <ul className='filter-cards'>
                {filterProducts.length
                    ? filterProducts.map((item) => (
                          <div key={item.id}>
                              <p>{item.title}</p>
                              <h4 onClick={() => setSelectCategory(item.category)}>
                                  {item.category}
                              </h4>
                          </div>
                      ))
                    : null}
            </ul>
        </div>
    );
}
