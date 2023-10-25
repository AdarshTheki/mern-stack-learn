import React from 'react';
import Room from './pages/Room';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoutes';
import { AuthProvider } from './utiles/AuthContext';

export default function App() {
   return (
      <BrowserRouter>
         <AuthProvider>
            <Routes>
               <Route element={<PrivateRoutes />}>
                  <Route path='/' element={<Room />} />
               </Route>
               <Route path='/login' element={<LoginPage />} />
            </Routes>
         </AuthProvider>
      </BrowserRouter>
   );
}
