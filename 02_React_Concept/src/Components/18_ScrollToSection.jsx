import React, { useRef } from 'react';

// scroll to particular section
export default function ScrollToSection() {
    const scrollRef = useRef(null);
    const data = [
        {
            label: 'First Card',
            style: {
                width: '100%',
                height: '400px',
                background: 'blue',
                textAlign: 'center',
            },
        },
        {
            label: 'Second Card',
            style: {
                width: '100%',
                height: '400px',
                background: 'orange',
                textAlign: 'center',
            },
        },
        {
            label: 'Three Card',
            style: {
                width: '100%',
                height: '400px',
                background: 'red',
                textAlign: 'center',
            },
        },
    ];

    function handlerScroll() {
        let elementPosition = scrollRef.current.getBoundingClientRect().top;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }

    return (
        <div className='wrapper'>
            <h2>scroll to particular section:</h2>
            <button onClick={handlerScroll}>Scroll to section</button>
            {data.map((item, index) => (
                <div ref={index === 1 ? scrollRef : null} key={index} style={item.style}>
                    <h3>{item.label}</h3>
                </div>
            ))}
        </div>
    );
}
