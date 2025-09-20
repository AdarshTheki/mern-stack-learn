/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import tiny from '../tinyPic.jpg';
import { products } from './dummyData';

function ProgressiveImage(props) {
    const { src, placeholder } = props;
    const [imgSrc, setImgSrc] = useState(placeholder || src);

    const customClass = placeholder && imgSrc === placeholder ? 'loading' : 'loaded';

    useEffect(() => {
        const newImage = new Image();
        newImage.src = src;
        newImage.onload = () => {
            setImgSrc(src);
        };
        // clean up
        return () => (newImage.onload = null);
    }, [src]);

    return <img className={customClass} src={imgSrc} loading='lazy' alt='tiny' height={100} />;
}

export default function Images() {
    return (
        <div>
            {products.slice(0, 9).map((item) => (
                <ProgressiveImage src={item.images} placeholder={tiny} key={item.id} />
            ))}
        </div>
    );
}
