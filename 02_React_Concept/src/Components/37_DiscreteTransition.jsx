import React, { useState } from 'react';
import styled from 'styled-components';

const DiscreteTransition = () => {
    const [view, setView] = useState('Dis-view1');

    const handleTransition = (newView) => {
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                setView(newView);
            });
        } else {
            setView(newView);
        }
    };

    return (
        <Container>
            <button onClick={() => handleTransition('Dis-view1')}>View 1</button>
            <button onClick={() => handleTransition('Dis-view2')}>View 2</button>
            <div className='Dis-container'>
                {view === 'Dis-view1' ? (
                    <div className='Dis-view Dis-view1'>This is View 1</div>
                ) : (
                    <div className='Dis-view Dis-view2'>This is View 2</div>
                )}
            </div>
        </Container>
    );
};

export default DiscreteTransition;

const Container = styled.div`
    .Dis-container {
        position: relative;
        overflow: hidden;
        height: 100px; /* Adjust as needed */
    }

    .Dis-view {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .Dis-view.Dis-view1 {
        background-color: lightblue;
        animation: fadeIn 0.5s forwards;
    }

    .Dis-view.Dis-view2 {
        background-color: lightcoral;
        animation: fadeIn 0.5s forwards;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
            @starting-style {
                opacity: 0;
            }
        }
    }
`;
