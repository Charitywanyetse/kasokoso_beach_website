
import React, { useState } from 'react';
import './User_profile.css';
import profileImage from '../assets/1000026721.jpg';

const UserProfile = () => {
  const userName = localStorage.getItem('userName') || 'Guest';
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('profile');

  // Sample data
  const messages = ['Welcome to Kasokoso Beach!', 'Your booking is confirmed!'];
  const bookings = ['Room 2A - July 25', 'Kayak Ride - July 28'];

  const handleSearch = () => {
    alert(`You searched for: ${searchTerm}`);
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <img src={profileImage} alt="User" className="profile-pic" />
        <h2>Greetings {userName}</h2>
      </header>

      <div className="search-section">
        <input 
          type="text" 
          placeholder=" Search" 
          className="search-bar" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        <div className="profile-buttons">
          <button onClick={() => setActiveTab('profile')}>My Profile</button>
          <button onClick={() => setActiveTab('activity')}>Activity</button>
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'profile' && (
          <div>
            <h3>My Profile Info</h3>
            <p><strong>Name:</strong> {userName}</p>
            <p><strong>Email:</strong> wanyetsecharity@gmail.com.com</p>
          </div>
        )}
        {activeTab === 'activity' && (
          <div>
            <h3>Recent Activity</h3>
            <ul>
              <li>Viewed gallery</li>
              <li>Made a booking</li>
            </ul>
          </div>
        )}
      </div>

      <div className="cards-container">
        <div className="profile-card">
          <h3>Messages</h3>
          <div className="card-content">
            <ul>
              {messages.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="profile-card">
          <h3>Bookings</h3>
          <div className="card-content">
            <ul>
              {bookings.map((booking, index) => (
                <li key={index}>{booking}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <footer>Kasokoso Beach®</footer>
    </div>
  );
};

export default UserProfile;
