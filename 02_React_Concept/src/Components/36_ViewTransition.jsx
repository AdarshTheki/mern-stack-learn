import React, { useState } from 'react';
import styled from 'styled-components';

const ViewTransitionExample = () => {
    const [view, setView] = useState('view1');
    const [transitioning, setTransitioning] = useState(false);

    const handleTransition = (newView) => {
        if (document.startViewTransition) {
            setTransitioning(true);
            document
                .startViewTransition(() => {
                    setView(newView);
                })
                .finished.finally(() => {
                    setTransitioning(false);
                });
        } else {
            setView(newView);
        }
    };

    return (
        <Container>
            <button onClick={() => handleTransition('view1')}>View 1</button>
            <button onClick={() => handleTransition('view2')}>View 2</button>
            <div className='view-container'>
                <div
                    className={`view ${view === 'view1' ? 'visible' : 'hidden'} ${
                        transitioning ? 'transitioning' : ''
                    }`}>
                    This is View 1
                </div>
                <div
                    className={`view ${view === 'view2' ? 'visible' : 'hidden'} ${
                        transitioning ? 'transitioning' : ''
                    }`}>
                    This is View 2
                </div>
            </div>
        </Container>
    );
};

export default ViewTransitionExample;

const Container = styled.div`
    .view-container {
        position: relative;
        overflow: hidden;
        height: 100px; /* Adjust as needed */
        background: red;
    }

    .view {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        background: #fff;
    }

    .view.visible {
        opacity: 1;
    }

    .view.hidden {
        opacity: 0;
    }

    .view.transitioning {
        pointer-events: none; /* Prevent interactions during transitions */
        background: lightblue;
    }
`;
