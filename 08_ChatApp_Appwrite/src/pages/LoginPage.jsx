import React, { useEffect, useState } from 'react';
import { useAuth } from '../utiles/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';

export default function LoginPage() {
   const { user, handleUserLogin } = useAuth();
   const navigate = useNavigate();

   const [credential, setCredential] = useState({
      email: '',
      password: '',
   });

   useEffect(() => {
      if (user) {
         navigate('/');
      }
   }, [navigate, user]);

   const handleInputChange = (e) => {
      setCredential({
         ...credential,
         [e.target.name]: e.target.value,
      });
   };

   return (
      <div className='auth--container'>
         <div className='form--container'>
            <form onSubmit={(e) => handleUserLogin(e, credential)}>
               <div className='field--wrapper'>
                  <label htmlFor='email'>Email:</label>
                  <input
                     id='email'
                     type='email'
                     placeholder='Enter your email...'
                     name='email'
                     required
                     value={credential.email}
                     onChange={handleInputChange}
                  />
               </div>
               <div className='field--wrapper'>
                  <label htmlFor='password'>Password:</label>
                  <input
                     id='password'
                     type='password'
                     placeholder='Enter your password...'
                     name='password'
                     required
                     value={credential.password}
                     onChange={handleInputChange}
                  />
               </div>
               <div className='field--wrapper'>
                  <input type='submit' value='Login' className='btn btn--lg btn--main' />
               </div>
            </form>
            <p>
               Don't have an account ? Register <NavLink to='/register'>HERE</NavLink>
            </p>
         </div>
      </div>
   );
}
