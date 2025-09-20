/* eslint-disable react/prop-types */
// CustomInput.js
import React, { useId } from 'react';

const CustomInput = ({
    label = 'label',
    type = 'text',
    placeholder = 'placeholder',
    error,
    success,
    disabled = false,
    className = '',
    ...rest
}) => {
    // Dynamic Tailwind CSS classes
    const baseClasses =
        'border hover:shadow cursor-pointer rounded-lg py-2 px-5 w-full outline-blue-300 focus:outline';
    const successClasses = success ? 'border-green-500 focus:border-green-600' : '';
    const errorClasses = error ? 'border-red-500 focus:border-red-600' : '';
    const disabledClasses = disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white';

    const id = useId();

    return (
        <div className={`flex flex-col ${className}`}>
            {label && (
                <label htmlFor={id} className='mb-1 text-gray-700 font-medium text-sm cursor-pointer capitalize'>
                    {label}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                className={`${baseClasses} ${successClasses} ${errorClasses} ${disabledClasses}`}
                {...rest}
            />
            {error && <span className='text-red-500 text-sm mt-1'>{error}</span>}
            {success && <span className='text-green-500 text-sm mt-1'>{success}</span>}
        </div>
    );
};

export default CustomInput;
