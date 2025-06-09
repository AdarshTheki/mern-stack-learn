import React from 'react';

export default function Button({ children, type, bgColor, textColor, className, ...props }) {
  return (
    <button className={`btn btn-primary ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  bgColor: 'bg-blue-600',
  textColor: 'text-white',
  className: '',
};
