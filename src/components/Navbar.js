




import logo from '../assets/images/logo.png'; // Adjust the path based on your folder structure

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="custom-navbar">
      <div className="logo-section">
        {/* <img src="../assets/images/logo.png" alt="True Church Logo" /> */}
        <img src={logo} alt="True Church Logo" />
        <h1>TRUE CHURCH</h1>
      </div>

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <nav className={`menu-section ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <span>HOMEPAGE</span>
              <small>WELCOME</small>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span>ABOUT</span>
              <small>OUR MISSION</small>
            </Link>
          </li>
          <li>
            <Link to="/sermons">
              <span>SERMONS</span>
              <small>LISTEN ANYWHERE</small>
            </Link>
          </li>
          <li>
            <Link to="/events">
              <span>EVENTS</span>
              <small>DONT MISS OUT</small>
            </Link>
          </li>
          <li>
            <Link to="/contact">
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


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/images/logo.png';
// import './Navbar.css';

// const Navbar = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`custom-navbar ${isSticky ? 'sticky' : ''}`}>
//       <div className="logo-section">
//         <img src={logo} alt="True Church Logo" />
//         <h1>TRUE CHURCH</h1>
//       </div>

//       <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
//         ☰
//       </button>

//       <nav className={`menu-section ${isOpen ? 'open' : ''}`}>
//         <ul className="nav-links">
//           <li><Link to="/"><span>HOMEPAGE</span><small>LOREM IPSUM</small></Link></li>
//           <li><Link to="/about"><span>ABOUT</span><small>OUR MISSION</small></Link></li>
//           <li><Link to="/sermons"><span>SERMONS</span><small>LABORIS NISI ALIQUIP</small></Link></li>
//           <li><Link to="/events"><span>EVENTS</span><small>SUNT IN CULPA</small></Link></li>
//           <li><Link to="/contact"><span>CONTACT</span><small>LOREM IPSUM</small></Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
