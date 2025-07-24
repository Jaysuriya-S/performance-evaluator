import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './manager/Dashboard';
import UserList from './manager/UserList';
import CreateTest from './manager/CreateTest';
import PerformanceReport from './manager/PerformanceReport';
import UserResult from './manager/UserResult';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/result" element={<UserResult />} />
        <Route path="/" element={<Navigate to="/manager-dashboard" />} />
        <Route path="/manager-dashboard" element={<Dashboard />} />
        <Route path="/manager/userlist" element={<UserList />} />
        <Route path="/create-test" element={<CreateTest />} />
        <Route path="/performance" element={<PerformanceReport />} />
      </Routes>
    </Router>
  );
}

export default App;
