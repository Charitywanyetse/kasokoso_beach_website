

import React from 'react';
import './CallToAction.css';
import { Link } from 'react-router-dom';


const CallToAction = () => {
  return (
    <section className="cta-section">
      
      <div className="cta-buttons">
        <Link to="/gallery">
          <button className="cta-btn">Explore Gallery</button>
        </Link>
        <Link to="/services">
          <button className="cta-btn">Learn More</button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;

