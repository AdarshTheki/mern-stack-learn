import React, { useState } from 'react';
import { Outlet, BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

/**
 * - Outlet: better way to protect both sibling route with same Auth to using Layout Route With both Protected
 * - isAllowed: to pass to boolean as condition which ats as more abstraction guard for rerendering the protection components
 * **/

const ProtectedRoute = ({ isAllowed, redirectPath = '/landing', children }) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }
    // return children;
    return children ? children : <Outlet />;
};

const Main = () => {
    const [user, setUser] = useState(null);
    const handleLogIn = () =>
        setUser({
            id: '1',
            name: 'Adarsh',
            permission: ['analyze'],
            roles: ['administration'],
        });
    const handleLogOut = () => setUser(null);

    return (
        <>
            <BrowserRouter>
                <h1>React Router</h1>
                <Navigation />
                {user ? (
                    <button onClick={handleLogOut}>SignOut</button>
                ) : (
                    <button onClick={handleLogIn}>LogIn</button>
                )}
                <Routes>
                    <Route index element={<Landing />} />
                    <Route path='landing' element={<Landing />} />
                    <Route element={<ProtectedRoute isAllowed={user} />}>
                        <Route path='home' element={<Home />} />
                        <Route path='dashboard' element={<Dashboard />} />
                    </Route>
                    <Route
                        path='analytics'
                        element={
                            <ProtectedRoute
                                redirectPath='/home'
                                isAllowed={user && user.permission.includes('analyze')}>
                                <Analytics />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='admin'
                        element={
                            <ProtectedRoute
                                redirectPath='/home'
                                isAllowed={user && user.roles.includes('administration')}>
                                <Admin />
                            </ProtectedRoute>
                        }
                    />
                    <Route path='*' element={<h2>Nothing Here: 404!</h2>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Main;

const Navigation = () => {
    return (
        <nav style={{ display: 'flex', gap: '50px', fontSize: '1.5rem' }}>
            <Link to='/landing'>Landing</Link>
            <Link to='/home'>Home</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/admin'>Admin</Link>
            <Link to='/analytics'>Analytics</Link>
        </nav>
    );
};

const Landing = () => {
    return <h2>Landing Public : anyone can access this page.</h2>;
};

// Direct use to user & not used ProtectedRoute
const Home = ({ user }) => {
    // if (!user) {
    //   return <Navigate to='/landing' replace={true} />;
    // }
    return <h2>Home protected : only authorized access this page.</h2>;
};

const Dashboard = () => {
    return <h2>Dashboard protected : only authorized page.</h2>;
};
const Admin = () => {
    return <h2>Admin protected : only authorized access with role "Admin" this page.</h2>;
};

const Analytics = () => {
    return (
        <h2>Analytics protected : only authorized access with permission "Analytics" this page.</h2>
    );
};
