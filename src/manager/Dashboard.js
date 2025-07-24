import React from 'react';
import { useNavigate } from 'react-router-dom';
import './manager.css';

const Dashboard = () => {
  const navigate = useNavigate();

  // Dummy data for now
  const stats = {
    total_users: 10,
    attended: 6,
    not_attended: 4
  };

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

        {/* ✅ Stats Box only */}
        <div className="stats-summary">
          <div className="stat-card">
            <h4>Total Users</h4>
            <p>{stats.total_users}</p>
          </div>
          <div className="stat-card">
            <h4>Attended</h4>
            <p>{stats.attended}</p>
          </div>
          <div className="stat-card">
            <h4>Not Attended</h4>
            <p>{stats.not_attended}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
