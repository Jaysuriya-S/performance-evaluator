// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <nav className="navbar">
        <div className="logo">SkillSight</div>
        <ul className="nav-links">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Unlock Your True Potential</h1>
          <p>AI-powered skill assessments that reveal your strengths and weaknesses.</p>
          <Link to="/skills" className="btn-start">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
