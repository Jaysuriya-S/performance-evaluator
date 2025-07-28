import React, { useEffect, useState } from 'react';
import './manager.css';
import axios from 'axios';
import { Link } from 'react-router-dom'
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/auth/user-list/')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="manager-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Manager Panel</h2>
        <ul>
          <li><Link to="/manager-dashboard">Dashboard</Link></li>
          <li><Link to="/manager/userlist">User List</Link></li>
          <li><Link to="/manager/reports">Performance Reports</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <div className="userlist-container">
          <h2 className="userlist-title">Registered Users</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="userlist-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Date Joined</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={user.id || index}>
                      <td>{index + 1}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{new Date(user.date_joined).toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="no-users">No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
