import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { authServices } from './AppWrite/Auth';
import { login, logout } from './Redux/authSlice';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        authServices
            .getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                } else {
                    dispatch(logout());
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => setLoading(false));
    }, [dispatch]);

    return (
        <div className='min-h-screen'>
            {!loading ? (
                <>
                    <Header />
                    <main className='bg-neutral min-h-[70vh]'>
                        <Outlet />
                    </main>
                    <Footer />
                </>
            ) : (
                <h1 className='flex items-center justify-center'>Loading...</h1>
            )}
        </div>
    );
};

export default App;
