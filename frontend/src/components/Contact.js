// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          We'd love to hear from you. Feel free to reach out through any of the channels below.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>support@yourcompany.com</p>
          </div>

          <div className="contact-item">
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>

          <div className="contact-item">
            <h3>Address</h3>
            <p>
              Your Company Inc.<br />
              123 Main Street<br />
              New York, NY 10001<br />
              United States
            </p>
          </div>

          <div className="contact-item">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9am – 6pm<br />Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
