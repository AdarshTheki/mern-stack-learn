/* eslint-disable react/prop-types */
import React, { useId, forwardRef } from 'react';

function Select({ options = [], label = '', className = '', ...props }, ref) {
    const id = useId();
    return (
        <div className='w-full flex flex-col'>
            {label && (
                <label htmlFor={id} className=''>
                    {label}:
                </label>
            )}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`select select-secondary w-full max-w-xs ${className}`}>
                {options?.map((option) => (
                    <option key={option} value={option} className='text-xl capitalize'>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default forwardRef(Select);
