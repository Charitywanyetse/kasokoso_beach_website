
import React from 'react';
import './User_profile.css';
import profileImage from '../assets/1000026721.jpg';

const UserProfile = () => {
  const userName = localStorage.getItem('userName') || 'Guest';

  return (
    <div className="profile-container">
      <header className="profile-header">
        <img src={profileImage} alt="User" className="profile-pic" />
        <h2>Greetings {userName}</h2>
      </header>

      <div className="search-section">
        <input type="text" placeholder="🔍 Search" className="search-bar" />
        <div className="profile-buttons">
          <button>My Profile</button>
          <button>Activity</button>
        </div>
      </div>

      <div className="cards-container">
        <div className="profile-card">
          <h3>Messages</h3>
          <div className="card-content"> {/* Add dynamic messages here */}</div>
        </div>
        <div className="profile-card">
          <h3>Bookings</h3>
          <div className="card-content"> {/* Add dynamic bookings here */}</div>
        </div>
      </div>

      <footer>Kasokoso Beach®</footer>
    </div>
  );
};

export default UserProfile;
