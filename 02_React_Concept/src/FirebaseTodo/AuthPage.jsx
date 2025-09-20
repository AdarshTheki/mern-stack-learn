/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@mui/material';
import { logout } from './firebase';

export default function AuthPage({ userInfo }) {
    return (
        <div>
            <h4>Auth Page:</h4>
            {userInfo ? (
                <div>
                    <p>User name: {userInfo?.name}</p>
                    <p>User Email: {userInfo?.email}</p>
                </div>
            ) : null}
            {/* Logout Button */}
            <Button variant='contained' color='info' onClick={logout}>
                LogOut
            </Button>
        </div>
    );
}
