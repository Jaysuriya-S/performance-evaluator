import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
// Import other pages when ready:
 import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';

// import Contact from './components/Contact';
// import Help from './components/Help';
// import About from './components/About';
// import SkillForm from './components/SkillForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
     
        {/* Define routes for other pages later */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/help" element={<Help />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/skills" element={<SkillForm />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
