
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const payload = { username: username.trim(), password: password.trim() };
    console.log('Sending login request:', payload);

    try {
      const response = await fetch('http://127.0.0.1:8000/auth/token/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get("content-type");

      if (!contentType || !contentType.includes("application/json")) {
        throw new Error('Invalid response from server');
      }

      const data = await response.json();

      console.log('Response status:', response.status);
      console.log('Response data:', data);

      if (response.ok) {
        const token = data.auth_token || data.token || data.access;

        if (token) {
          localStorage.setItem('authToken', token);
          setSuccess('Login successful! Redirecting...');
          setTimeout(() => navigate('/dashboard'), 1500);
        } else {
          setError('Login succeeded but no token received.');
        }
      } else {
        const errorMsg =
          data?.non_field_errors?.[0] ||
          data?.detail ||
          data?.username?.[0] ||
          data?.password?.[0] ||
          'Login failed. Please check your credentials.';

        setError(errorMsg);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Network error. Please ensure the backend is running at http://127.0.0.1:8000');
    }
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

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

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
