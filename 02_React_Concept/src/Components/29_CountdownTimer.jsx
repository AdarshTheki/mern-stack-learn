/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';

function CountdownTimer({ initialTime, onTimeFinish }) {
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(true);
    const intervalRef = useRef();

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((prev) => {
                    if (prev === 0) {
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        if (onTimeFinish) {
                            onTimeFinish();
                        }
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning, onTimeFinish]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setTime(initialTime);
        setIsRunning(false);
    };

    return (
        <div>
            <p>
                {String(minutes).padStart(2, '0')} : {String(seconds).padStart(2, '0')}
            </p>
            <div>
                <button onClick={() => setIsRunning(!isRunning)}>
                    {isRunning ? 'Pause' : 'Resume'}
                </button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={() => setIsRunning(true)}>Start</button>
            </div>
        </div>
    );
}

export default function CountdownTimerTest() {
    const handleTimeFinish = () => {
        console.log('Task completed');
    };

    return <CountdownTimer initialTime={10} onTimeFinish={handleTimeFinish} />;
}
