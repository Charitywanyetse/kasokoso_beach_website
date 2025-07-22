import React from 'react';
import './Contact.css'; // Optional: only if you are using CSS styles
import locationImg from '../assets/location.png'; // Make sure the image exists in the correct path
import {Link} from 'react-router-dom'
import topBanner from '../assets/1000026719 (1).jpg';

const ContactUs = () => {
  return (
    <>
     <div className="contact-banner">
       <img src={topBanner} alt="Contact Us Banner" className="contact-top-banner" />
       <div className="banner-text">Contact Us</div>
     </div>
      <div className="two-column-container">
        {/* Left side */}
        <div className="text-section">
          <h2>Address</h2>
          <p>Kasokoso Beach</p>
          <p>Kira Municipality</p>
          <p>Wakiso District</p>

          <h3>Contacts:</h3>
          <p>+256 777 888 999</p>
          <p>+256 111 222 555</p>

          <h3>Working Hours:</h3>
          <p>Open Daily: 8:00 AM – 6:30 PM</p>
        </div>

        {/* Right side */}
        <div className="image-section">
          <img src={locationImg} alt="Kasokoso Beach Location" />
        </div>
      </div>

      {/* Button outside the container */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link to = "/send-message">
          <button className="contact-button">Leave a Message</button>
        </Link>  
        <p></p>
      </div>
     </> 
    
  )
};

export default ContactUs;

