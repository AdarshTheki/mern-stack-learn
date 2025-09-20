import React, { useEffect, useState } from 'react';

const lazy = 'https://cdn.pixabay.com/photo/2017/09/08/17/05/elephant-2729413_150.jpg';
const big =
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDcwfHxuYXR1cmV8ZW58MHx8fHwxNjYwODg5MjM3&ixlib=rb-1.2.1&q=80&w=2000';
    
const ProgressiveImage = ({ lazy_image = lazy, big_image = big }) => {
  
    const [imgSrc, setImgSrc] = useState(lazy_image || big_image);

    const customClass = lazy_image && imgSrc === lazy_image ? 'loading' : 'loaded';

    useEffect(() => {
        const newImage = new Image();
        newImage.src = big_image;
        newImage.onload = () => {
            setImgSrc(big_image);
        };
        // clean up
        return () => {
            newImage.onload = null;
        };
    }, [big_image]);

    return <img src={imgSrc} className={customClass} width={500} />;
};
export default ProgressiveImage;
