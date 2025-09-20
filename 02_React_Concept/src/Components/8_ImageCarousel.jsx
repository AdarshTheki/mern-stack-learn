import React, { useState } from 'react';

const images = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    name: `item${index}`,
    url: 'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400',
}));

const Carousel = () => {
    const [scrollX, setScrollX] = useState(0);

    const handleScroll = (direction) => {
        const container = document.querySelector('.image-scroll-container');
        const scrollAmount = 200; // Adjust scroll amount as needed

        if (direction === 'left') {
            container.scrollLeft -= scrollAmount;
            setScrollX(container.scrollLeft);
        } else if (direction === 'right') {
            container.scrollLeft += scrollAmount;
            setScrollX(container.scrollLeft);
        }
    };

    return (
        <div className='image-scroll-wrapper'>
            <div className='scroll-buttons'>
                <button onClick={() => handleScroll('left')}>◀</button>
                <button onClick={() => handleScroll('right')}>▶</button>
            </div>
            <div className='image-scroll-container'>
                {images.map((item) => (
                    <img
                        className='image-scroll-item'
                        key={item.id}
                        src={item.url}
                        alt={item.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
