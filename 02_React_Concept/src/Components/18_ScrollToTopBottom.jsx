import React, { useRef } from 'react';
import { products } from './dummyData';

// scroll to top and bottom to navigate windows
export default function ScrollToTopBottom() {
    const bottomRef = useRef(null);

    function handleScrollToTop() {
        // first way to scroll
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    function handleScrollToBottom() {
        // second way to scroll
        bottomRef.current.scrollIntoView({ behavior: 'smooth', bottom: 0 });
    }

    return (
        <div>
            <button onClick={handleScrollToBottom}>This is top components</button>
            <ul>
                {products?.map((item) => (
                    <p key={item.id}>{item.title}</p>
                ))}
            </ul>
            <div ref={bottomRef}>This is Bottom</div>
            <button onClick={handleScrollToTop}>This is bottom components</button>
        </div>
    );
}
