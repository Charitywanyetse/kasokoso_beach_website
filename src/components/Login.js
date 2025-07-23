
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.username.value;
    const password = e.target.password.value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      alert('Login successful!');
      navigate('/profile');
    } else {
      alert('Invalid credentials. Try again or sign up.');
    }
  };

  //  Define this to fix the error
  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-header">Log in :</div>

      <form className="login-form" onSubmit={handleLogin}>
        <input type="text" id="username" name="username" placeholder="User Email" required />
        <input type="password" id="password" name="password" placeholder="User Password" required />

        <button type="submit" className="login-button">LOG IN</button>
      </form>

      <p className="signup-text">
        Don't have an account? <br />
        <button className="signup-button" onClick={handleSignupRedirect}>
          SIGN UP
        </button>
      </p>

      <p>Kasokoso Beach®</p>
    </div>
  );
};

export default Login;


