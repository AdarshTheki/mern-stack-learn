/* eslint-disable react/prop-types */
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { loginEmailAndPassword, registerEmailAndPassword } from './firebase';

export default function UnAuthPage() {
    const [isLoginView, setIsLoginView] = useState(false);
    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });

    function handleLogin() {
        const { email, password } = loginFormData;
        loginEmailAndPassword(email, password);
    }

    function handleRegister() {
        const { name, email, password } = register;
        registerEmailAndPassword(name, email, password);
    }

    return (
        <div>
            <h4>Un-Auth Page:</h4>
            <div className='form-view'>
                <Button variant='contained' onClick={() => setIsLoginView(false)}>
                    Register View
                </Button>
                <Button variant='contained' onClick={() => setIsLoginView(true)}>
                    Login View
                </Button>
            </div>
            {isLoginView ? (
                <Login
                    formData={loginFormData}
                    setFormData={setLoginFormData}
                    handleLogin={handleLogin}
                />
            ) : (
                <Register
                    formData={register}
                    setFormData={setRegister}
                    handleRegister={handleRegister}
                />
            )}
        </div>
    );
}

function Login({ formData, setFormData, handleLogin }) {
    return (
        <div className='form-data'>
            <TextField
                id='email'
                type='email'
                label='Enter Email'
                value={formData.email}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        email: e.target.value,
                    })
                }
                variant='outlined'
                size='small'
            />
            <TextField
                id='password'
                type='password'
                label='Enter Password'
                value={formData.password}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        password: e.target.value,
                    })
                }
                variant='outlined'
                size='small'
            />
            <Button onClick={handleLogin} color='primary' variant='contained'>
                Login
            </Button>
        </div>
    );
}
function Register({ formData, setFormData, handleRegister }) {
    return (
        <div className='form-data'>
            <TextField
                id='name'
                type='text'
                label='Enter Your Name'
                value={formData.name}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        name: e.target.value,
                    })
                }
                variant='outlined'
                size='small'
            />
            <TextField
                id='email'
                type='email'
                label='Enter Email'
                value={formData.email}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        email: e.target.value,
                    })
                }
                variant='outlined'
                size='small'
            />
            <TextField
                id='password'
                type='password'
                label='Enter Password'
                value={formData.password}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        password: e.target.value,
                    })
                }
                variant='outlined'
                size='small'
            />
            <Button onClick={handleRegister} color='primary' variant='contained'>
                register
            </Button>
        </div>
    );
}
