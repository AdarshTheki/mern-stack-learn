import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData();
    
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>GitHub</h1>
            <h3 style={{ color: 'red' }}>
                {data?.map((item) => (
                    <span key={item.idMeal}>
                        {item.strMeal}
                        <br />
                        {item.idMeal}
                        <br />
                        {item.strCategory}
                    </span>
                ))}
            </h3>
        </div>
    );
};

export default Github;
