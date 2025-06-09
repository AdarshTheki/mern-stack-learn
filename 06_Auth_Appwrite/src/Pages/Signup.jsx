import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authServices } from '../AppWrite/Auth';
import { login } from '../Redux/authSlice';
import { Button, Inputs, Logo } from '../Components/index';

// 23
export default function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError('');
    const userData = await authServices.createAccount(data);
    if (userData) {
      await authServices
        .getCurrentUser()
        .then((data) => dispatch(login(data)))
        .catch((err) => setError(err));
      navigate('/');
    }
    // try {
    //   const userData = await authServices.createAccount(data);
    //   if (userData) {
    //     const userData = await authServices.getCurrentUser();
    //     if (userData) dispatch(login(userData));
    //     navigate('/');
    //   }
    // } catch (error) {
    //   setError(error.message);
    // }
  };

  return (
    <div className='flex items-center justify-center py-10'>
      <div className={`mx-auto w-full max-w-lg bg-base-100 rounded-xl p-10 border border-black/10`}>
        <div className='mb-2 flex justify-center'>
          <span className='inline-block'>
            <Logo />
          </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create account</h2>
        <p className='mt-2 text-center text-base'>
          Already have an account?&nbsp;
          <Link
            to='/login'
            className='font-medium text-primary transition-all duration-200 hover:underline'>
            Sign In
          </Link>
        </p>

        {/* error option */}
        {error && <p className='text-error mt-8 text-center'>{error}</p>}

        {/* form option */}
        <form onSubmit={handleSubmit(create)}>
          <div className='space-y-5'>
            <Inputs
              label='Full Name:'
              placeholder='Enter your full name'
              {...register('name', {
                required: true,
              })}
            />
            <Inputs
              label='Email: '
              placeholder='Enter your email'
              type='email'
              {...register('email', {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    'Email address must be a valid address',
                },
              })}
            />
            <Inputs
              label='Password: '
              type='text'
              placeholder='Enter your password'
              {...register('password', {
                required: true,
              })}
            />
            <Button type='submit' className='w-full'>
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
