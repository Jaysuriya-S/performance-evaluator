import React from 'react';
import { useNavigate } from 'react-router-dom';
import './manager.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="manager-dashboard">
      <div className="sidebar">
        <h2>Manager Panel</h2>
        <ul>
          <li onClick={() => navigate('/manager/userlist')}>User List</li>
          <li onClick={() => navigate('/manager/createtest')}>Create Test</li>
          <li onClick={() => navigate('/manager/performance-report')}>Performance Reports</li>
          <li onClick={() => navigate('/')}>Logout</li>
        </ul>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Welcome, Manager</h1>
          <p>Manage tests, users and analyze performance insights.</p>
        </div>
        <div className="dashboard-actions">
          <div className="card" onClick={() => navigate('/manager/userlist')}>
            <h3>View Users</h3>
            <p>Check all registered users and their details.</p>
          </div>
          <div className="card" onClick={() => navigate('/manager/createtest')}>
            <h3>Create Test</h3>
            <p>Assign skill-based questions to users.</p>
          </div>
          <div className="card" onClick={() => navigate('/manager/performance-report')}>
            <h3>Performance Reports</h3>
            <p>Analyze test performance and insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
