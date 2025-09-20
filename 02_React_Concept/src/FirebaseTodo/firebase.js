// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { addDoc, collection, getFirestore, orderBy, query } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAxs2vGTSglGSmF3V44i_Q40lGOBt_wrJg',
    authDomain: 'fir-todos-6540c.firebaseapp.com',
    projectId: 'fir-todos-6540c',
    storageBucket: 'fir-todos-6540c.appspot.com',
    messagingSenderId: '623783424217',
    appId: '1:623783424217:web:14f6271443a7a56a808ec8',
    measurementId: 'G-BJST4LN1VG',
};

// Initialize Firebase
export const getApp = initializeApp(firebaseConfig);
export const getDB = getFirestore(getApp);
export const getQuery = query(collection(getDB, 'todos'), orderBy('timestamp', 'desc'));
export const getAuthenticate = getAuth(getApp);

async function logout() {
    await signOut(getAuthenticate);
}
async function registerEmailAndPassword(name, email, password) {
    try {
        const res = await createUserWithEmailAndPassword(getAuthenticate, email, password);
        const user = res?.user;
        await addDoc(collection(getDB, 'users'), {
            uid: user?.uid,
            name,
            email,
            authProvider: 'local',
        });
    } catch (error) {
        alert(error.message);
    }
}
async function loginEmailAndPassword(email, password) {
    try {
        await signInWithEmailAndPassword(getAuthenticate, email, password);
    } catch (error) {
        alert(error.message);
    }
}

export { logout, loginEmailAndPassword, registerEmailAndPassword };
