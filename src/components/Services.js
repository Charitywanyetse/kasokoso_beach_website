
import React, { useState } from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';

// import bannerImg from '../assets/1000026725.jpg';
import service1Img from '../assets/1000026727.jpg';
import service2Img from '../assets/1000026733.jpg';
import service3Img from '../assets/resta.jpg';
import service4Img from '../assets/confrrr.jpg';

const services = [
  {
    title: 'Deluxe Pool Access',
    description:
      'Relax and refresh in our pristine swimming pools at Kasokoso Beach. Designed for both leisure and private gatherings, our pools are clean, safe, and well-maintained to ensure a comfortable experience. Families and friends can enjoy a fun-filled day swimming, sunbathing, or simply unwinding beside the water. We also offer private pool bookings for those seeking an exclusive aquatic retreat, along with amenities like lounge chairs, towels, and shaded areas.',
    image: service1Img,
    price: 'UGX 50,000',
  },
  {
    title: 'Private Grounds for Hire',
    description:
      'Our scenic grounds at Kasokoso Beach provide the perfect outdoor setting for a variety of events, including weddings, birthday parties, family reunions, and other celebrations. Surrounded by lush greenery and a calming sea breeze, our spacious grounds are customizable to suit your event needs.',
    image: service2Img,
    price: 'UGX 80,000',
  },
  {
    title: 'Private Restaurant',
    description:
      'At Kasokoso Beach, our private restaurant offers a delicious dining experience in a peaceful setting. Whether it’s a romantic meal or a group celebration, enjoy fresh meals prepared with local ingredients.',
    image: service3Img,
    price: 'UGX 80,000',
  },
  {
    title: 'Luxury Conference Hall',
    description:
      'Host your business meetings, seminars, and workshops in our fully equipped conference hall. With comfortable seating, sound systems, and refreshment services, it’s ideal for productive sessions.',
    image: service4Img,
    price: 'UGX 100,000',
  },
];

const Services = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const nextService = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToGallery = () => {
    navigate('/gallery');
  };

  const goToBook = () => {
    navigate('/booking'); // corrected route
  };

  const currentService = services[current];

  return (
    <div className="services-page">
       <section className="service-hero">
        <h1>SERVICES</h1>
      </section>
      {/* <img src={bannerImg} alt="Top Banner" className="top-banner" /> */}

      <div className="service-section">
        <button className="arrow left-arrow" onClick={prevService}>
          &#8592;
        </button>

        <div className="service-image">
          <img src={currentService.image} alt={currentService.title} />
          <div className="price-tag">{currentService.price}</div>
        </div>

        <div className="service-details">
          <h2>{currentService.title}</h2>
          <p>{currentService.description}</p>
          <div className="buttons">
            <button className="gallery-button" onClick={goToGallery}>
              See Gallery
            </button>
            <br></br>
            <button className="book-button" onClick={goToBook}>
              Book Now
            </button>
          </div>
        </div>

        <button className="arrow right-arrow" onClick={nextService}>
          &#8594;
        </button>
      </div>

      <br></br>

        <p>Kasokoso Beach®</p>
    </div>
  );
};

export default Services;
