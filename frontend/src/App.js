// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Contact from './components/Contact';
import Help from './components/Help';
import AboutUs from './components/AboutUs';
 // ✅ Fixed import

 import SkillForm from './components/SkillForm';
 import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>           
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<AboutUs />} /> {/* ✅ Fixed usage */}
        <Route path="/skills" element={<SkillForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
