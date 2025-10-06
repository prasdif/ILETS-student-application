import React, { useState } from 'react';
import './index.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            <line x1="10" y1="8" x2="16" y2="8"></line>
            <line x1="10" y1="12" x2="16" y2="12"></line>
            <line x1="10" y1="16" x2="14" y2="16"></line>
          </svg>
          <span className="logo-text">IELTS Institute</span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About Us</a></li>
          <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        <div className={`nav-buttons ${isMenuOpen ? 'active' : ''}`}>
          <button className="btn btn-primary">Learn More</button>
        </div>

        <div 
          className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;  