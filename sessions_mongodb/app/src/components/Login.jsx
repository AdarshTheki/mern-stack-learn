import { useState } from 'react';
import useDeviceFingerprint from './useDeviceInfo';
import instance from './instance';

function Login() {
  const [username, setUsername] = useState('bluecaller@gmail.com');
  const [password, setPassword] = useState('bluecaller@2024');
  const deviceInfo = useDeviceFingerprint();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await instance.post('/user/temp/login', {
        email: username,
        password,
        device: deviceInfo,
      });
      if (data) {
        console.log(data);
        localStorage.setItem('userToken', data.token);
        alert('Login successful');
      }
    } catch (error) {
      alert('Login failed: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
