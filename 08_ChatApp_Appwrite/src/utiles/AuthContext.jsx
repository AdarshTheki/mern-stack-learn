import { createContext, useContext, useEffect, useState } from 'react';
import { account } from '../constant';
import { ID } from 'appwrite';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState(false);

   const navigate = useNavigate();

   useEffect(() => {
      getUserOnLoad();
   }, []);

   const getUserOnLoad = async () => {
      try {
         const accountDetails = await account.get();
         setUser(accountDetails);
      } catch (error) {
         console.log(error);
      }
      setLoading(false);
   };

   const handleUserLogin = async (e, credential) => {
      e.preventDefault();
      try {
         const response = await account.createEmailSession(credential.email, credential.password);
         console.log('session login: ', response);
         const accountDetails = await account.get();
         setUser(accountDetails);
      } catch (error) {
         console.log(error.message);
      }
   };

   const handleUserLogout = async () => {
      await account.deleteSession('current');
      setUser(null);
   };

   const handleUserRegister = async (e, credential) => {
      e.preventDefault();
      if (credential.password1 !== credential.password2) {
         alert('Passwords do not match');
         return;
      }
      try {
         const { email, password1, name } = credential;
         const { $id: userID } = await account.create(ID.unique(), email, password1, name);
         if (userID) {
            await account.createEmailSession(email, password1);
            const accountDetails = await account.get();
            setUser(accountDetails);
            navigate('/');
         }
      } catch (error) {
         console.log('handleUserRegister >> ', error.message);
      }
   };

   const contextData = { user, handleUserLogin, handleUserLogout, handleUserRegister };

   return (
      <AuthContext.Provider value={contextData}>
         {loading ? <p>Loading...!</p> : children}
      </AuthContext.Provider>
   );
};
export const useAuth = () => {
   return useContext(AuthContext);
};

export default AuthContext;
