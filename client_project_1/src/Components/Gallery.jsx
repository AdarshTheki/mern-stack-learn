import React from 'react';
import { SliderImage } from '../utils';

const images = [
    { id: 2, title: 'artistic impression', src: '/2.webp' },
    { id: 3, title: 'artistic impression', src: '/3.webp' },
    { id: 4, title: 'artistic impression', src: '/4.webp' },
    { id: 5, title: 'artistic impression', src: '/5.webp' },
    { id: 6, title: 'artistic impression', src: '/6.webp' },
    { id: 7, title: 'artistic impression', src: '/7.webp' },
];

const Gallery = () => {
    return (
        <div className='bg-gray-300' id='gallery'>
            <h2 className='section-title'>Project Gallery</h2>
            <SliderImage images={images} />
        </div>
    );
};

export default Gallery;
