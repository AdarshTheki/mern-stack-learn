import React, { useLayoutEffect, useState } from 'react';

// useWindowResize / useResponsive Custom Hook
export default function WindowResize() {
    const windowSize = useWindowResize();
    const { width, height } = windowSize;

    return (
        <div>
            <p>Width : {width}</p>
            <p>Height : {height}</p>
        </div>
    );
}

function useWindowResize() {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useLayoutEffect(() => {
        handleResize();

        function listenerResize() {
            handleResize();
        }

        window.addEventListener('resize', listenerResize);
        return () => window.removeEventListener('resize', listenerResize);
    }, []);

    return windowSize;
}
