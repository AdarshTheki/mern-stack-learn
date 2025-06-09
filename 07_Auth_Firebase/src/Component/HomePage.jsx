import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

import { auth } from './firebaseConfig';
import useUserHook from './useUserHook';

const Home = () => {
    const { isLoading, user } = useUserHook();
    const [theme, setTheme] = useState('night');

    const ADD_THEME = ['light', 'dark', 'night', 'coffee', 'aqua', 'cyberpunk'];

    useEffect(() => {
        const html = document.querySelector('html');
        html.setAttribute('data-theme', theme);
    }, [theme]);

    const signOutHandler = async () => {
        await signOut(auth)
            .then(() => {
                alert('Sign-out successful.');
            })
            .catch((error) => {
                alert('An error happened.', error.message);
            });
    };

    if (isLoading) {
        return <h1 className='text-4xl text-center py-20 text-error'>Loading...</h1>;
    }

    return (
        <div className='card max-w-[600px] px-5 mx-auto my-10 border overflow-hidden'>
            <div className='card-body text-center'>
                {!user ? (
                    <>
                        <h1 className='text-center font-bold text-2xl mb-5'>
                            Home Page Your not Login ?
                        </h1>
                        <Link to='/login' className='link link-primary capitalize text-xl'>
                            please Login
                        </Link>
                    </>
                ) : (
                    <div className='card'>
                        <h1 className='text-center font-bold text-2xl mb-5'>
                            Successfully login here!
                        </h1>
                        <div className='flex py-5 gap-5'>
                            <img
                                src={user?.photoURL}
                                className='w-[70px] rounded-full'
                                alt='user'
                            />
                            <div className='text-left'>
                                <h2>
                                    Name :- <span>{user?.displayName}</span>
                                </h2>
                                <h2>
                                    Email :- <span>{user?.email}</span>
                                </h2>
                                <h2>
                                    Email Verified :-{' '}
                                    <span>{user?.emailVerified ? 'True' : 'False'}</span>
                                </h2>
                            </div>
                        </div>
                        <button onClick={signOutHandler} className='btn btn-secondary'>
                            logout account
                        </button>
                    </div>
                )}
            </div>

            <div className='flex items-center justify-center gap-10 py-5'>
                <span className='w-[50px] h-[50px] bg-neutral rounded-full'></span>
                <span className='w-[50px] h-[50px] bg-primary rounded-full'></span>
                <span className='w-[50px] h-[50px] bg-secondary rounded-full'></span>
                <span className='w-[50px] h-[50px] bg-accent rounded-full'></span>
            </div>
            <div className='flex flex-wrap w-full gap-5'>
                {ADD_THEME.map((item) => (
                    <button
                        key={item}
                        className={`btn text-xl w-1/4 min-w-[100px] mx-auto text-white`}
                        onClick={() => setTheme(item)}>
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Home;
