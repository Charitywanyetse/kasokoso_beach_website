import React from 'react';
import './AboutUs.css';


const AboutUs = () => {
  return (
    <div className="about-page">
      {/*  Banner */}
      <section className="about-hero">
        <h1>ABOUT US</h1>
      </section>

      {/* First Container */}
      <section className="about-section">
        <div className="about-text">
          <p>
            Welcome to <strong>Kasokoso Beach</strong>, your premier destination for 
            hosting memorable events, relaxing leisure, and enjoying exceptional
             dining experiences. Located in a beautiful setting, we offer a variety 
             of services including grounds for hire, swimming pool services,
              a conference hall, and a cozy restaurant. Our dedicated team 
              is committed to providing excellent service and ensuring every
              visit is fantastic. Whether you're planning a celebration, 
              a corporate event, or just looking to unwind, 
             <strong>Kasokoso Beach</strong>is your ideal choice.
          </p>
        </div>
        <div className="about-box">
          <h2>OUR STORY</h2>
        </div>
      </section>

      {/* Second Container */}
      <section className="about-section">
        <div className="about-box-2">
          <h2>PRIVACY POLICY</h2>
        </div>
        <div className="about-text">
          <p>At <strong>Kasokoso</strong> Beach, we value your privacy and are committed to protecting
             your personal information. This privacy policy explains how we collect,
              use, and safeguard your data when you visit our website.</p>

            <h2>Information We Collect</h2>  
          <ul>
            <li>Personal details you provide voluntarily, such as your name, email, and phone number.</li>
            <li>Non-personal data like your IP address and browsing activity via cookies.</li>
          </ul>

           <h2>How We Use Your Information</h2> 
          <ul>
            <li>To process bookings and inquiries.</li>
            <li>To improve our website and services.</li>
            <li>To send updates, promotions, or important notices (with your consent).</li>
          </ul>

          <h2>Sharing Your Information</h2> 
          
          <p>We do not sell or rent your personal data to third parties. 
              Your information may be shared with trusted partners solely 
              for service delivery purposes.</p>

          <p><b>Your Rights:</b></p>

          <p>You can request access to your personal data, correct inaccuracies,
             or request deletion at any time by contacting us .</p>

             <p><b> Security:</b></p>

          <p>We implement appropriate security measures to protect your 
            data from unauthorized access or disclosure.</p>

          <p><b> Changes to this Policy:</b></p>

          <p>We may update this privacy policy periodically. Changes will 
            be posted on this page with updated effective dates.</p>
        </div>
      </section>

      {/* Third Container */}
      <section className="about-section">
        <div className="about-text">
          <p>
            Welcome to the <strong>Kasokoso</strong> Beach website.
            By accessing or using our site,
            you agree to the following terms:
          </p>
          <ul>
            <li> <strong>Use of Content:</strong>All content on this website is for informational purposes only and may not be reproduced without permission.</li>
            <li>  <strong>Bookings & Payments: </strong> All bookings must be confirmed and paid according to our instructions.</li>
            <li> <strong>Liability:</strong> We are not responsible for any injury, loss, or damage resulting from the use of our services or website.</li>
            <li> <strong>User Conduct:</strong> Users agree to use the website responsibly and refrain from engaging in unlawful or harmful activities.</li>
            <li> <strong>Changes to Terms:</strong> We reserve the right to modify these terms at any time. Continued use signifies acceptance of updates.</li>
          </ul> 
        </div>
        <div className="about-box">
          <h2>TERMS OF USE</h2>
        </div>
      </section>
      <br></br>

       <p>Kasokoso Beach®</p>

    </div>
  );
};

export default AboutUs;
