import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation for username and password
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    const loginData = { username, password };
    // Store the login data in local storage
    localStorage.setItem('loginData', JSON.stringify(loginData));
    // Call the onLogin function to pass the login data to the parent component
    onLogin(loginData);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError('');
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
