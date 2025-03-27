import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Sessions from './components/Sessions';

function App() {
  return (
    <Router>
      <div>
        <h1>Session Management App</h1>
        <ul>
          <li>
            <NavLink to={'/register'}>register</NavLink>
          </li>
          <li>
            <NavLink to={'/login'}>login</NavLink>
          </li>
          <li>
            <NavLink to={'/sessions'}>sessions</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sessions' element={<Sessions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
