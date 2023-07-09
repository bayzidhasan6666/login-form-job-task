import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-toggle " onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-nav ${isOpen || !isMobile ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to={'/'}>Home</Link>
        </li>
     
        <li className="nav-item">
          <Link to={'/info'}>Information</Link>
        </li>
     
      </ul>
    </nav>
  );
};

export default Navbar;
