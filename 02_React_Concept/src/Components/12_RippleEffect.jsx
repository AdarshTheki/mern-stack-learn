import React, { useEffect, useState } from 'react';

export default function RippleEffect() {
    const [isEffect, setIsEffect] = useState(false);
    const [coordinate, setCoordinate] = useState({ x: -1, y: -1 });

    function handleRippleEffect(e) {
        const rect = e.target.getBoundingClientRect();
        setCoordinate({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    }

    useEffect(() => {
        if (coordinate.x !== -1 && coordinate.y !== -1) {
            setIsEffect(true);
            setTimeout(() => setIsEffect(false), 300);
        } else {
            setIsEffect(false);
        }
    }, [coordinate]);

    useEffect(() => {
        if (!isEffect) setCoordinate({ x: -1, y: -1 });
    }, [isEffect]);

    return (
        <div className='button-ripple-effect'>
            <p onClick={handleRippleEffect}>
                {isEffect ? <span style={{ left: coordinate.x, top: coordinate.y }}></span> : null}
                Click Button to See Ripple Effect
            </p>
        </div>
    );
}
