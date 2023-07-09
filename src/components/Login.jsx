import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
    onLogin(loginData);

    // Redirect to the information page
    navigate('/info');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError('');
  };

  const isSubmitDisabled = !username || !password;

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
          <button type="submit" disabled={isSubmitDisabled}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
