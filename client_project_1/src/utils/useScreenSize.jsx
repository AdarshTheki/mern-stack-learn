import React, { useEffect, useState } from 'react';

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [slidesShow, setSlidesToShow] = useState(1);

    const handleResize = () => {
        setScreenSize(window.innerWidth);
    };

    useEffect(() => {
        if (screenSize > 900) {
            setSlidesToShow(3);
        } else if (screenSize > 600) {
            setSlidesToShow(2);
        } else {
            setSlidesToShow(1);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenSize]);

    return { screenSize, slidesShow };
};

export default useScreenSize;
