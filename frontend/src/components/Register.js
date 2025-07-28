import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    re_password: '',  // djoser expects this name for password confirmation
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.re_password) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/auth/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful! Please check your email to activate your account.');
        setError('');
        navigate('/login'); // redirect to login page after registration
      } else {
        // Djoser error messages could be nested, handle that gracefully
        const messages = Object.values(data).flat().join(' ');
        setError(messages || 'Registration failed');
      }
    } catch (err) {
      setError('Network error, please try again later');
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Create Account 📝</h2>
        <p className="subtext">Join us and boost your skills with AI</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              required
              value={form.username}
              onChange={handleChange}
              placeholder="Choose a username"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="re_password"
              required
              value={form.re_password}
              onChange={handleChange}
              placeholder="Re-enter your password"
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="glow-btn">Register</button>

          <div className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
