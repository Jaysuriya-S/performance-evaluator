// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // optional styling file

const Header = () => (
  <nav className="navbar">
    <div className="logo">🔥 SkillSight</div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/help">Help</Link></li>
      <li><Link to="/about">About Us</Link></li>
    </ul>
  </nav>
);

export default Header;
