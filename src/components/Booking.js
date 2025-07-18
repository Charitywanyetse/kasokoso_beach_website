
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
  const navigate = useNavigate();
  const [Start_time, setStart] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();

    // Save booking data in localStorage or handle it as you like
    localStorage.setItem('bookingFullName', fullName);
    localStorage.setItem('bookingEmail', email);
    localStorage.setItem('bookingDate', date);

    alert('Booking successful!');
    navigate('/thank-you');
  };

  return (
    <div className="booking-container">
      <div className="booking-header">BOOK SERVICES </div>

      <form className="booking-form" onSubmit={handleBooking}>
        <input
          type="text"
          placeholder="Start time"
          required
          value={StartTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="text "
          placeholder="End time"
          required
          value={EndTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <input
          type="number"
          placeholder="Total Price"
          required
          value={TotalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
          />

        <input
          type="text"
          placeholder="Booking date"
          required
          value={BookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
        />

        <button type="submit" className="register-button">
          CONFIRM
        </button>
      </form>

      <br />
      <p>Kasokoso Beach®</p>
    </div>
  );
};

export default Booking;
