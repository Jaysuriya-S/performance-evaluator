// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <section className="hero">
        <div className="hero-content">
          <h1>Unlock Your True Potential</h1>
          <p>AI-powered skill assessments that reveal your strengths and weaknesses.</p>
          <Link to="/login" className="btn-start">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
