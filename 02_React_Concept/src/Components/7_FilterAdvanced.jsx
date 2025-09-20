import React, { useState } from 'react';
import { products } from './dummyData';

export default function FilterAdvanced() {
    const [filterProducts, setFilterProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === 'all') {
            setFilterProducts(products);
        } else {
            setFilterProducts(products?.filter((item) => item.category === category));
        }
    };

    return (
        <div>
            <div>
                {Array.from(['all', ...new Set(products?.map((i) => i.category))])?.map(
                    (category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={selectedCategory === category ? 'active' : ''}>
                            {category}
                        </button>
                    )
                )}
            </div>
            <div>
                {filterProducts?.map((i) => (
                    <p key={i.id}>{`${i.id}. ${i.title}, ${i.category}`}</p>
                ))}
            </div>
        </div>
    );
}
