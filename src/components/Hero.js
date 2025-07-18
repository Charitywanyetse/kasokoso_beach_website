
import React from 'react';
import './Hero.css';
import backgroundImg from '../assets/heros.jpg'; 

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="overlay">
        <h1>Welcome to Kasokoso Beach</h1>
        <p><i>Where Every Moment is crafted to create</i></p>
        <p><i> Unforgettable memories.</i></p>
    

      </div>
    </div>
  );
};

export default Hero;

