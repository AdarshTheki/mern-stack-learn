import React, { useEffect, useState } from 'react';
import { products } from './dummyData';

export default function ScrolledIndicator() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    function handleScroll() {
        const scrolledHeight = document.body.scrollTop || document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage(Math.floor((scrolledHeight / height) * 100));
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className='scroll-position' style={{ width: `${scrollPercentage}%` }}></div>
            {products.map((product) => (
                <p key={product.id}>{product.title}</p>
            ))}
        </div>
    );
}
