
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Save email and password in localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Account created! Now log in.');
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-header">REGISTER ACCOUNT</div>

      <form className="register-form" onSubmit={handleSignup}>
        <input type="text" placeholder="Full Name" required />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="tel" placeholder="Phone contact" required />
        <button type="submit" className="register-button">REGISTER</button>
      </form>

      <br />
      <p>Kasokoso Beach®</p>
    </div>
  );
};

export default Signup;
