import React, { useEffect, useState } from 'react';
import './manager.css'; // Reuse styles
import mockData from '../mock/users.json';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  setUsers(mockData);
}, []);

  return (
    <div className="userlist-container">
      <h2 className="userlist-title">Registered Users</h2>
      <table className="userlist-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Skill</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id || index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone || 'N/A'}</td>
                <td>{user.skill || 'Not provided'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-users">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
