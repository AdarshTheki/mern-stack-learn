import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { auth } from './firebaseConfig';
import Input from './Input';

const CreateAccountPage = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const createUser = async (data) => {
        await createUserWithEmailAndPassword(auth, data?.email, data?.password)
            .then((authUser) => {
                const user = authUser.user;
                console.log(user);
                navigate('/');
            })
            .catch((err) => setError(err.message));
    };

    return (
        <div className='text-center'>
            <h2 className='text-info my-5 text-2xl uppercase'>Create Account</h2>
            {error && <h2 className='text-error'>{error}</h2>}
            <form
                onSubmit={handleSubmit(createUser)}
                className='flex items-center px-5 max-w-[600px] bg-neutral rounded-lg py-5 mx-auto justify-center flex-col gap-5'>
                <Input
                    label='Name: '
                    placeholder='Enter Full Name'
                    {...register('name', { required: true })}
                />
                <Input
                    label='Email: '
                    placeholder='Enter your email'
                    {...register('email', { required: true })}
                />
                <Input
                    label='Password: '
                    placeholder='Enter your password'
                    {...register('password', { required: true })}
                />
                <button type='submit' className='btn btn-primary'>
                    Create Account
                </button>
            </form>
            <p className='text-xl'>
                You have an Account?{' '}
                <Link to='/login' className='link link-warning'>
                    Login Here.
                </Link>
            </p>
        </div>
    );
};

export default CreateAccountPage;
