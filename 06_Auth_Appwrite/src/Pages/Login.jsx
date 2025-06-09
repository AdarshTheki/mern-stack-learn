import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../Redux/authSlice';
import { Button, Inputs, Logo } from '../Components/index';
import { authServices } from '../AppWrite/Auth';

// 23
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const login = async (data) => {
    console.log(data);
    setError('');
    try {
      const session = await authServices.login(data);
      if (session) {
        const userData = await authServices.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='flex items-center py-10 justify-center w-full'>
      <div className={`mx-auto w-full max-w-lg bg-base-100 rounded-xl p-10 border border-black/10`}>
        <div className='mb-2 flex justify-center'>
          <span className='inline-block'>
            <Logo />
          </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
        <p className='mt-2 text-center text-base'>
          Don&apos;t have any account?&nbsp;
          <Link
            to='/signup'
            className='font-medium text-primary transition-all duration-200 hover:underline'>
            Sign Up
          </Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
          <div className='space-y-5'>
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
              Login account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
