import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../utiles/AuthContext';

export default function PrivateRoutes({ children }) {
   const { user } = useAuth();
   // console.log(user);
   return <>{user ? <Outlet /> : <Navigate to='/login' />}</>;
}
