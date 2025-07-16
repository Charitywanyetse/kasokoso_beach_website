import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offers from './components/Offers';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Gallery from './components/Gallery'
import Services  from './components/Services';

// import About from './components/About'; // example other page
// import Contact from './components/Contact'; // example other page


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
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         */}
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;

