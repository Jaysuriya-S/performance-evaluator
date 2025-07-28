import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Or use inline styling

const Navbar = () => {
  return (
    <div style={{ backgroundColor: '#0097A7', padding: '15px 30px', borderRadius: '10px 10px 0 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', color: 'gold', fontSize: '22px' }}>
          🔥 SkillSight
        </div>
        <div style={{ display: 'flex', gap: '25px' }}>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
          <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link>
          <Link to="/help" style={{ color: 'white', textDecoration: 'none' }}>Help</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
