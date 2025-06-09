import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithRedirect,
} from 'firebase/auth';
import { useForm } from 'react-hook-form';

import { auth } from './firebaseConfig';
import Input from './Input';

const provider = new GoogleAuthProvider();

const LogInPage = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const logIn = async (data) => {
        await signInWithEmailAndPassword(auth, data?.email, data?.password)
            .then((authUser) => {
                const user = authUser.user;
                console.log(user);
                navigate('/');
            })
            .catch((err) => setError(err.message));
    };

    const Popup = async () => {
        await signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(token, user);
                navigate('/');
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    const Redirect = async () => {
        try {
            await signInWithRedirect(auth, provider).then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token);
                navigate('/');
            });
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='max-w-[600px] mx-auto space-y-10 text-center'>
            <h2 className='text-info my-5 text-2xl uppercase'>login Account</h2>
            {error && <h2 className='text-error'>{error}</h2>}
            <form
                onSubmit={handleSubmit(logIn)}
                className='flex items-center px-5 max-w-[600px] bg-neutral rounded-lg py-5 mx-auto justify-center flex-col gap-5'>
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
                    Login Account
                </button>
            </form>
            <div className='grid grid-cols-2 gap-2'>
                <button className='btn btn-secondary' onClick={Popup}>
                    SignIn with Popup
                </button>
                <button className='btn btn-natural' onClick={Redirect}>
                    SignIn with Redirect
                </button>
            </div>
            <p className='text-xl'>
                Do not have an Account?{' '}
                <NavLink className='link link-warning' to='/signup'>
                    Create new account.
                </NavLink>
            </p>
        </div>
    );
};

export default LogInPage;
