

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">

        {/* Contact Section */}
        <div className="footer-column">
          <h4>Contact Us:</h4>
          <p>Tel: +256 777 666 888</p>
          <p>Email: <a href="mailto:kask.ug@gmail.com" style={{ color: 'white' }}>kask.ug@gmail.com</a></p>
        </div>

        {/* Links Section Left */}
        <div className="footer-column">
          <h4>Links</h4>
          <Link to="/" className="footer-link"><p>Home</p></Link>
          <Link to="/about" className="footer-link"><p>About Us</p></Link>
        </div>

        {/* Links Section Right */}
        <div className="footer-column">
          <Link to="/services" className="footer-link"><p>Services</p></Link>
          <Link to="/contact" className="footer-link"><p>Contact Us</p></Link>
          <Link to="/gallery" className="footer-link"><p>Gallery</p></Link>
        </div>

        {/* Login Button - unchanged */}
        <div className="footer-column right">
          <Link to="/Login">
            <button className="footer-login-btn">Login</button>
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
