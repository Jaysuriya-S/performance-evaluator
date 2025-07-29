// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';        // Common layout with Navbar
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Contact from './components/Contact';
import Help from './components/Help';
import AboutUs from './components/AboutUs';
import SkillForm from './components/SkillForm';
import Dashboard from './components/Dashboard';  // ✅ This is your manager dashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/skills" element={<SkillForm />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Admin dashboard */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
