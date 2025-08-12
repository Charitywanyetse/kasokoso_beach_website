import React, { useState } from 'react';
import './SendMessage.css'; 

const SendMessage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();

    // Save message to local storage (or send to backend in real projects)
    localStorage.setItem('messageName', name);
    localStorage.setItem('messagePhone', phone);
    localStorage.setItem('messageEmail', email);
    localStorage.setItem('messageText', message);

    alert('Message sent successfully!');


    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="send-message-container">
      <h2>Send Message</h2>
      <form className="send-message-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Send a  Message</button>
      </form>
      <br></br>
        <p>Kasokoso Beach®</p>
      

    </div>

     
  );
};

export default SendMessage;
