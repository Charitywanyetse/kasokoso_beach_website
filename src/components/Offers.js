import React from 'react';
import './Offers.css';
import garden from '../assets/grounds.jpg';
import pool from '../assets/pool.jpg';
import conference from '../assets/conferenca hall.jpg';
import restaurant from '../assets/restaurant.jpg';

const Offers = () => {
  const services = [
    { name: 'Gardens', img: garden },
    { name: 'Pools', img: pool },
    { name: 'Conference', img: conference },
    { name: 'Restaurant', img: restaurant },
  ];

  return (
    <div className="offers">
      <h2>★ ★ ★ Offers ★ ★ ★</h2>
      <div className="card-container">
        {services.map((service, index) => (
          <div className="offer-card" key={index}>
            <img src={service.img} alt={service.name} />
            <div className="title">{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;

