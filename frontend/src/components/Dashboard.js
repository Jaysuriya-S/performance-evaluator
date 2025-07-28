// src/components/Dashboard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import SkillForm from './SkillForm';
import './Dashboard.css';



const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Welcome, {user?.username || "User"}!</h2>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      <section className="skill-form-section">
        <h3>Submit a Skill for Evaluation</h3>
        <SkillForm />
      </section>

      <section className="status-section">
        <h3>Previous Evaluations</h3>
        <table className="status-table">
          <thead>
            <tr>
              <th>Skill</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace with dynamic data from backend */}
            <tr>
              <td>Python</td>
              <td>2025-07-20</td>
              <td className="status-completed">Completed</td>
              <td><button className="view-button">View Result</button></td>
            </tr>
            <tr>
              <td>React.js</td>
              <td>2025-07-22</td>
              <td className="status-pending">Pending</td>
              <td><button className="resend-button">Resend Link</button></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="notifications-section">
        <h4>Recent Notifications</h4>
        <ul>
          <li>✅ Evaluation link sent to your email.</li>
          <li>✅ Result submitted for "Python".</li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
