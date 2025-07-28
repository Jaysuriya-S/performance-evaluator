import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-page">
      <div className="help-container">
        <h1>Help & Support</h1>
        <p className="intro">Welcome to the Performance Evaluation Help Center. Here you can find answers and support to get the most out of your skill testing.</p>
        
        <div className="help-section">
          <h2>How to Use the Platform</h2>
          <ul>
            <li>Create an account to start evaluating your skills.</li>
            <li>Choose tests based on your area of interest.</li>
            <li>Submit your answers and get instant feedback.</li>
          </ul>
        </div>
        
        <div className="help-section">
          <h2>Account Issues</h2>
          <p>If you face any issues logging in or registering, please use the <a href="/forgot-password">Forgot Password</a> feature or contact support.</p>
        </div>
        
        <div className="help-section">
          <h2>Contact Support</h2>
          <p>You can reach us at <a href="mailto:support@performanceeval.com">support@performanceeval.com</a> for any queries or technical help.</p>
        </div>
      </div>
    </div>
  );
};

export default Help;