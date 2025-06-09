import { forwardRef, useId } from 'react';

const Input = forwardRef(function Input({ label, type = 'text', ...props }, ref) {
  const id = useId();
  
  return (
    <div>
      {label && (
        <label className='label text-error' htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        {...props}
        ref={ref}
        className='input input-bordered input-info w-full max-w-xs'
        autoComplete='off'
      />
    </div>
  );
});

export default Input;
