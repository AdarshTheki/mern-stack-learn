/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating({ totalStars = 10 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }
    function handleMouseLeave() {
        setHover(rating);
    }

    return (
            <div className='star-rating'>
                {[...Array(totalStars)].map((_, index) => {
                    index += 1;
                    return (
                        <FaStar
                            key={index}
                            className={index <= (hover || rating) ? 'active' : 'inActive'}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            size={40}
                        />
                    );
                })}
            </div>
    );
}
