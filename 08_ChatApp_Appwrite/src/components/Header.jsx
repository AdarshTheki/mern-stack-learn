import React from 'react';
import { useAuth } from '../utiles/AuthContext';
import { LogOut } from 'react-feather';

export default function Header() {
   const { user, handleUserLogout } = useAuth();
   return (
      <div id='header--wrapper'>
         {user ? (
            <>
               <span className='username'>Welcome, {user?.name}</span>
               <div className='header--link' onClick={handleUserLogout}>
                  Logout <LogOut />
               </div>
            </>
         ) : (
            <>
               <h1>Please Login !</h1>
            </>
         )}
      </div>
   );
}
