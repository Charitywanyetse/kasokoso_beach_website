import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';


const Navbar = () => {
  return (
<nav className="navbar">
  <div className="logo-container">
    <Link to="/">
      <img src={logo} alt="Logo" className="logo" />
    </Link>
  </div>
  <ul className="nav-links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about-us">About Us</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/contact-us">Contact Us</Link></li>
    {/* <li><Link to="/contact">Contact Us</Link></li> */}
    <li><Link to="/gallery">Gallery</Link></li>
  </ul>
</nav>

  );
};

export default Navbar;

