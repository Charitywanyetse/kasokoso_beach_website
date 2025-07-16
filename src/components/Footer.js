
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Contact Us:</h4>
          <p>Tel: +256 777 666 888</p>
          <p>Email: kask.ug@gmail.com</p>
        </div>

        <div className="footer-column">
          <h4>About us</h4>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>

        <div className="footer-column right">
          <button className="footer-login-btn">Login</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
