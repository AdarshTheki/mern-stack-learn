/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const steps = Array.from([1, 2, 3, 4, 5], (_, index) => `${index + 1}`);

export default function StepProgressbar() {
    const [activeStep, setActiveStep] = useState(0);

    function handlePreviousStep() {
        setActiveStep((prev) => Math.max(prev - 1, 0));
    }

    function handleNextStep() {
        setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    }

    let size = (100 / steps.length - 1) * activeStep;

    return (
        <Container $size={size}>
            <div className='step-progressbar'>
                <div className='steps-progress'>
                    {steps.map((item, index) => (
                        <button
                            key={item}
                            className={`step ${index === activeStep ? 'active' : ''} ${
                                index < activeStep ? 'completed' : ''
                            }`}>
                            {item}
                        </button>
                    ))}
                </div>
                <div className='step-line'></div>
                <button disabled={activeStep === 0} onClick={handlePreviousStep}>
                    Previous Step
                </button>
                <button disabled={activeStep === steps.length - 1} onClick={handleNextStep}>
                    Next Step
                </button>
            </div>
        </Container>
    );
}

const Container = styled.div`
    max-width: 80%;
    margin: auto;

    .steps-progress {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 20px;
    }
    .step {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .step.active {
        background-color: #007bff;
        color: #fff;
    }
    .step.completed {
        background-color: #28a745;
        color: #fff;
    }
    .step-line {
        width: ${(props) => props.$size}%;
        height: 10px;
        background: #28a745;
    }
`;
