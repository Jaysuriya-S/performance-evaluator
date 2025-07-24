// src/components/ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate backend email reset logic here
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="forgot-page">
      <div className="forgot-box">
        <h2>Forgot Password 🔐</h2>
        <p className="subtext">Enter your email and we’ll send you a reset link</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your registered email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="glow-btn">Send Reset Link</button>

          <div className="login-link">
            Remember your password? <Link to="/login">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
