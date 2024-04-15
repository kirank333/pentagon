// Login.js
import React, { useState } from 'react';
import useAuthStore from './store';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loginError } = useAuthStore();

  const handleLogin = () => {
    login(username, password);
  };

  return (
    <div>
      <h2>Login</h2>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
