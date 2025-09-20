import React, { useState } from 'react';

export default function FormValidation() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [show, setShow] = useState(false);

    function handleFormChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        validateInput(name, value);
    }

    function validateInput(getName = '', getValue) {
        switch (getName) {
            case 'username':
                setError((prevErr) => ({
                    ...prevErr,
                    username:
                        getValue.length < 6
                            ? `${getValue.length} must be at least 6 characters`
                            : '',
                }));
                break;
            case 'email':
                setError((prevErr) => ({
                    ...prevErr,
                    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getValue)
                        ? ''
                        : 'Invalid email address',
                }));
                break;
            case 'password':
                setError((prevErr) => ({
                    ...prevErr,
                    password:
                        getValue.length < 6
                            ? `${getValue.length} must be at least 6 characters`
                            : '',
                }));
                break;
            default:
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        setShow(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    value={formData.username}
                    onChange={handleFormChange}
                    type='text'
                    name='username'
                    placeholder='Enter Your Name'
                    autoComplete='off'
                />
                {show && <span>{error?.username}</span>}
            </div>
            <div>
                <label>Email</label>
                <input
                    value={formData.email}
                    onChange={handleFormChange}
                    type='email'
                    name='email'
                    placeholder='Enter Your Email'
                    autoComplete='off'
                />
                {show && <span>{error?.email}</span>}
            </div>
            <div>
                <label>Password</label>
                <input
                    value={formData.password}
                    onChange={handleFormChange}
                    type='password'
                    name='password'
                    placeholder='Enter Your Password'
                    autoComplete='off'
                />
                {show && <span>{error?.password}</span>}
            </div>
            <button>Submit</button>
        </form>
    );
}
