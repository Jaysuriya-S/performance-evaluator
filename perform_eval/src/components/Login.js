// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${username}`);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Welcome Back 👋</h2>
        <p className="subtext">Login to continue your journey</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="link-group">
            <Link to="/forgot-password" className="link">Forgot password?</Link>
          </div>
          <button type="submit" className="glow-btn">Login</button>
          <div className="register-link">
            Don’t have an account? <Link to="/register">REGISTER</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
