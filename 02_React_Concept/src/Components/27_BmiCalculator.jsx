import React, { useState } from 'react';

export default function BmiCalculator() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [BMI, setBMI] = useState(0);
    const [errMsg, setErrMsg] = useState('');

    function calculateGmi() {
        if (!height || !weight) {
            setErrMsg('Please enter value both width and height !');
            return;
        }
        const numHeight = parseFloat(height);
        const numWeight = parseFloat(weight);

        const calcHeightInMeter = numHeight / 100;
        const calcBmiValue = (numWeight / (calcHeightInMeter * calcHeightInMeter)).toFixed(2);
        setBMI(calcBmiValue);
        setErrMsg('');
    }

    return (
        <div>
            <div className='bmi-calculator'>
                <div>
                    <label>Height (CM) : </label>
                    <input
                        type='number'
                        onChange={(e) => setHeight(e.target.value)}
                        value={height}
                    />
                </div>
                <div>
                    <label>Weight (KG) : </label>
                    <input
                        type='number'
                        onChange={(e) => setWeight(e.target.value)}
                        value={weight}
                    />
                </div>
                <button onClick={calculateGmi}>Calculate BMI</button>
            </div>
            {errMsg ? <p>{errMsg}</p> : null}
            <p>
                {BMI < 18.5 ? 'Under Weight' : BMI >= 18.5 && BMI < 24.9 ? 'Normal' : 'Over Weight'}
            </p>
        </div>
    );
}
