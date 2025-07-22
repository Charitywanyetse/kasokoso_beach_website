import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offers from './components/Offers';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Signup from './components/Signup';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import Booking from './components/Booking';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import SendMessage from './components/SendMessage';
import ThankYou from './components/ThankYou';


const Home = () => (
  <>
    <Hero />
    <Offers />
    <CallToAction />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/Signup"element={<Signup/>}/>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/send-message" element={<SendMessage />} /> 
        <Route path="/thank-you" element={<ThankYou />} />

        
{/* <Route path="/booking" element={<Booking />} /> */}
        
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;

