// src/components/Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Registered with Email: ${form.email}, Username: ${form.username}`);
    // TODO: Send to backend
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
              name="confirmPassword"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
            />
          </div>

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
