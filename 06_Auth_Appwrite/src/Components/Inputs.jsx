import React, { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className='w-full'>
      {label && (
        <label className='label-text' htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`input input-bordered input-secondary w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
        autoComplete="off"
      />
    </div>
  );
});

export default Input;
