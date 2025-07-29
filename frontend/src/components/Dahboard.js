import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './manager.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    total_users: 0,
    skill_submitted: 0,  // Changed from 'attended'
    not_submitted: 0     // Changed from 'not_attended'
  });

  useEffect(() => {
    // Fetch user statistics
    axios.get('http://127.0.0.1:8000/auth/user-stats/')
      .then((res) => {
        const total = res.data.total_users;
        const submitted = res.data.submitted_users || 0; // Fallback to 0 if undefined
        const not_submitted = total - submitted;

        setStats({
          total_users: total,
          skill_submitted: submitted,
          not_submitted: not_submitted,
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
          <li onClick={() => navigate('/manager/skill-users')}>Skill Submitted Users</li> {/* Added new menu item */}
          <li onClick={() => navigate('/manager/performance-report')}>Performance Reports</li>
          <li onClick={() => navigate('/')}>Logout</li>
        </ul>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Welcome, Manager</h1>
          <p>Manage users and analyze skill submissions.</p> {/* Updated text */}
        </div>

        {/* Stats Summary */}
        <div className="stats-summary">
          <div className="stat-card">
            <h4>Total Users</h4>
            <p>{stats.total_users}</p>
          </div>
          <div className="stat-card">
            <h4>Skills Submitted</h4> {/* Updated label */}
            <p>{stats.skill_submitted}</p>
          </div>
          <div className="stat-card">
            <h4>Not Submitted</h4> {/* Updated label */}
            <p>{stats.not_submitted}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;