import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Component/HomePage';
import CreateAccount from './Component/CreateAccount';
import LogInPage from './Component/LogInPage';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/signup',
    element: <CreateAccount />,
  },
  {
    path: '/login',
    element: <LogInPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
