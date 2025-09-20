/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { products } from './dummyData';

export default function TabTest() {
    function handleChange(currentIndex) {
        console.log(currentIndex);
    }

    return <Tabs tabsContent={products} onChange={handleChange} />;
}

function Tabs({ tabsContent, onChange }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(index) {
        setCurrentTabIndex(index);
        onChange(index);
    }

    return (
        <div>
            <div className='heading'>
                {tabsContent.slice(0, 3)?.map((tabItem, index) => (
                    <button key={index} onClick={() => handleOnClick(index)}>
                        {tabItem.title}
                    </button>
                ))}
            </div>
            <div className='content'>
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].description}
            </div>
        </div>
    );
}
