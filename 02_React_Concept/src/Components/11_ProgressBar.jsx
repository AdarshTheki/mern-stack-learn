import React, { useState } from 'react';

export default function ProgressBar() {
    const [progressPercent, setProgressPercent] = useState(0);
    const [errMsg, setErrMsg] = useState('');

    function handleProgressPercent(e) {
        setProgressPercent(e.target.value);
        if (e.target.value > 100) {
            setErrMsg('Please enter a value less than 100 !');
        } else {
            setErrMsg('');
        }
    }

    return (
        <div>
            <div className='progress-bar'>
                {progressPercent >= 0 && progressPercent <= 100 ? (
                    <div className='bar' style={{ width: `${progressPercent}%` }}>
                        {progressPercent} %
                    </div>
                ) : (
                    <p>{errMsg}</p>
                )}
            </div>
            <div>
                <label>Custom Progress Bar:</label>
                <input
                    type='range'
                    max={150}
                    min={0}
                    step={5}
                    value={progressPercent}
                    onChange={handleProgressPercent}
                />
            </div>
        </div>
    );
}
