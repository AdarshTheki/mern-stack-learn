/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getAuthenticate, getDB } from './firebase';
import AuthPage from './AuthPage';
import UnAuthPage from './UnAuthPage';
import TodoLists from './TodoLists';

export default function Auth() {
    const [user, loading, error] = useAuthState(getAuthenticate);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        async function fetchUserInfo() {
            try {
                const queryUsers = query(collection(getDB, 'users'), where('uid', '==', user?.uid));
                const currDoc = await getDocs(queryUsers);
                const data = currDoc.docs[0].data();
                setUserInfo(data);
            } catch (error) {
                console.error(error);
            }
        }
        if (user) fetchUserInfo();
    }, [user, loading]);

    if (error) return <h2>Something was wrong ! Please Check</h2>;

    return (
        <div className='wrapper'>
            {loading ? (
                <h2>Loading ! Please Wait...</h2>
            ) : user ? (
                <AuthPage userInfo={userInfo} />
            ) : (
                <UnAuthPage />
            )}
            <hr />
            <TodoLists userInfo={userInfo} />
        </div>
    );
}
