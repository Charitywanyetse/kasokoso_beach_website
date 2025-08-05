// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';
// import './Navbar.css';


// const Navbar = () => {
//   return (
// <nav className="navbar">
//   <div className="logo-container">
//     <Link to="/">
//       <img src={logo} alt="Logo" className="logo" />
//     </Link>
//   </div>
//   <ul className="nav-links">
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/about-us">About Us</Link></li>
//     <li><Link to="/services">Services</Link></li>
//     <li><Link to="/contact-us">Contact Us</Link></li>
//     {/* <li><Link to="/contact">Contact Us</Link></li> */}
//     <li><Link to="/gallery">Gallery</Link></li>
//   </ul>
// </nav>

//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust path as needed
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about-us" onClick={() => setIsOpen(false)}>About Us</Link></li>
        <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


