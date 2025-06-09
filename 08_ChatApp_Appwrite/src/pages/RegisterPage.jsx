import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useAuth } from '../utiles/AuthContext';

export default function RegisterPage() {
   const { user, handleUserRegister } = useAuth();
   const navigate = useNavigate();

   const [credential, setCredential] = useState({
      name: '',
      email: '',
      password1: '',
      password2: '',
   });

   const handleInputChange = (e) => {
      setCredential({
         ...credential,
         [e.target.name]: e.target.value,
      });
   };

   return (
      <div className='auth--container'>
         <div className='form--container'>
            <form onSubmit={(e) => handleUserRegister(e, credential)}>
               <div className='field--wrapper'>
                  <label htmlFor='email'>Full Name:</label>
                  <input
                     id='name'
                     type='text'
                     placeholder='Enter your name...'
                     name='name'
                     required
                     value={credential.name}
                     onChange={handleInputChange}
                  />
               </div>
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
                     name='password1'
                     required
                     value={credential.password1}
                     onChange={handleInputChange}
                  />
               </div>
               <div className='field--wrapper'>
                  <label htmlFor='password2'>Conform Password:</label>
                  <input
                     id='password2'
                     type='password'
                     placeholder='Enter your conform password...'
                     name='password2'
                     required
                     value={credential.password2}
                     onChange={handleInputChange}
                  />
               </div>
               <div className='field--wrapper'>
                  <input type='submit' value='Register' className='btn btn--lg btn--main' />
               </div>
            </form>
            <p>
               Already an account ? Please login <NavLink to='/login'>HERE</NavLink>
            </p>
         </div>
      </div>
   );
}
