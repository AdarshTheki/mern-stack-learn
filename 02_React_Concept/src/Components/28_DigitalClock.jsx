import React, { useEffect, useState } from 'react';

export default function DigitalClock() {
    const [timer, setTimer] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='digital-clock'>
            <div className='time'>
                <span>{timer.getHours().toString().padEnd(2, '0')} : </span>
                <span>{timer.getMinutes().toString().padEnd(2, '0')} : </span>
                <span>{timer.getSeconds().toString().padEnd(2, '0')}</span>
            </div>
            <div className='date'>
                {timer.toLocaleDateString(undefined, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </div>
        </div>
    );
}
