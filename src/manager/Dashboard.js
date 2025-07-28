import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './manager.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    total_users: 0,
    attended: 0,
    not_attended: 0,
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/auth/user-stats/')
      .then((res) => {
        const total = res.data.total_users;
        const attended = res.data.submitted_users;
        const not_attended = total - attended;

        setStats({
          total_users: total,
          attended: attended,
          not_attended: not_attended,
        });
      })
      .catch((err) => {
        console.error('❌ Failed to fetch user stats:', err);
      });
  }, []);

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

        {/* ✅ Live Stats Box */}
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
