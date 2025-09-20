import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const images = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    name: `item${index}`,
    url: 'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400',
}));

export default function ImageSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const previousBtn = () =>
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);

    const nextBtn = () =>
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);

    return (
        <div>
            <div className='image-slider'>
                <BsArrowLeftCircleFill className='left arrow' onClick={previousBtn} />
                <div className='image-container'>
                    {images.map((image, index) => (
                        <img
                            key={image.id}
                            src={image.url}
                            alt={image.name}
                            width='100%'
                            className={currentSlide === index ? 'show' : 'hidden'}
                        />
                    ))}
                </div>
                <div className='circles'>
                    {images.map((_, index) => (
                        <button
                            className={currentSlide === index ? 'active' : ''}
                            key={index}></button>
                    ))}
                </div>
                <BsArrowRightCircleFill className='right arrow' onClick={nextBtn} />
            </div>
        </div>
    );
}
