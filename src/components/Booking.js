
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';
// import { Link } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
    const goToBooking = () => {
    navigate('/booking');
    };

  // State declarations
  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [date, setDate] = useState('');
  const [StartTime, setStartTime] = useState('');
  const [EndTime, setEndTime] = useState('');
  const [NumberOfPeople, setNumberOfPeople] = useState('');
  const [BookingDate, setBookingDate] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();

    // Save booking data
    // localStorage.setItem('bookingFullName', fullName);
    // localStorage.setItem('bookingEmail', email);
    // localStorage.setItem('bookingDate', date);
    localStorage.setItem('bookingStartTime', StartTime);
    localStorage.setItem('bookingEndTime', EndTime);
    localStorage.setItem('bookingNumberOfPeople', NumberOfPeople);
    localStorage.setItem('bookingBookingDate', BookingDate);

    alert('Booking successful!');
    navigate('/thank-you');
  };

  return (
    <div className="booking-container">
      {/* <div className="booking-header">BOOK SERVICES</div> */}
      <h1>BOOK SERVICES</h1>

      <form className="booking-form" onSubmit={handleBooking}>
  
        {/* <input
          type="text"
          placeholder="Full Name"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Date (e.g., 2025-07-30)"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        /> */}

        <input
          type="text"
          placeholder="Start Time"
          required
          value={StartTime}
          onChange={(e) => setStartTime(e.target.value)}
        />

        <input
          type="text"
          placeholder="End Time"
          required
          value={EndTime}
          onChange={(e) => setEndTime(e.target.value)}
        />

        <input
          type="number"
          placeholder="Number Of People"
          required
          value={NumberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
        />

        <input
          type="text"
          placeholder="Booking Date"
          required
          value={BookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
        />
         <button type="submit" className="register-button">CONFIRM</button>


       {/* <button type="submit" className="register-button">CONFIRM</button> */}

      </form>

      <br />
      <p>Kasokoso Beach®</p>
    </div>
  );
};

export default Booking;
  