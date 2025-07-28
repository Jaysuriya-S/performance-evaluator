// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <div className="aboutus-container">
        <h1>About Performance Evaluator</h1>
        <p className="intro">
          Welcome to Performance Evaluator, your ultimate skill-testing platform powered by AI!  
          Our mission is to help individuals and organizations accurately assess skills, identify strengths, and boost growth.
        </p>

        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            To empower learners and professionals worldwide through reliable, interactive, and insightful performance evaluations that drive personal and career development.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Interactive skill tests tailored to your goals</li>
            <li>Instant, AI-powered performance analytics</li>
            <li>Personalized feedback and improvement tips</li>
            <li>User-friendly interface accessible on all devices</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Meet Our Team</h2>
          <p>
            A passionate group of developers, educators, and AI enthusiasts dedicated to delivering the best skill evaluation experience.
          </p>
        </section>

        <section className="about-section">
          <h2>Join Us</h2>
          <p>
            Ready to elevate your skills? Sign up, take tests, and start your growth journey today.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
