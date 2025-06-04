

import logo from '../assets/images/logo.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Navbar = () => {

    useScrollAnimation(); // initialize scroll animations

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="custom-navbar fade-in-up">
      <Link to="/" className='text-dec' onClick={closeMenu}>
      <div className="logo-section">

        
        <img src={logo} alt="True Church Logo" />
        
       
        <h1>FAITH CHURCH</h1>
      </div>
       </Link>

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <nav className={`menu-section ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={closeMenu}>
              <span>HOMEPAGE</span>
              <small>WELCOME</small>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              <span>ABOUT</span>
              <small>OUR MISSION</small>
            </Link>
          </li>
          <li>
            <Link to="/sermons" onClick={closeMenu}>
              <span>SERMONS</span>
              <small>LISTEN ANYWHERE</small>
            </Link>
          </li>
          <li>
            <Link to="/events" onClick={closeMenu}>
              <span>EVENTS</span>
              <small>DONT MISS OUT</small>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              <span>CONTACT</span>
              <small>GET INTOUCH</small>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
