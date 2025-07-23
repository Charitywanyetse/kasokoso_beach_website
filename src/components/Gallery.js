
import React from 'react';
import './Gallery.css';
import groundsImg from '../assets/1000026733.jpg'
import  restaurantImg from '../assets/1000026731.jpg'
import poolImg from '../assets/1000026727.jpg'
import ConferenceImg from '../assets/conference halls.jpg'



const galleryItems = [

    { title: 'Grounds', image: groundsImg, description:
       'Grounds for Hire: Beautiful outdoor spaces available for weddings, parties, and gatherings, perfect for making special moments memorable.' },

  { title: 'Restaurant', image: restaurantImg, description: 
    'Restaurant: Enjoy delicious meals in a cozy atmosphere, offering a variety of dishes to satisfy every palate.' },

       { title: 'Pools', image: poolImg, description:
     'Swimming Pool Services: Relax and unwind with our clean, well-maintained swimming pools, available for leisure or private parties.' },
    
  { title: 'conference', image: ConferenceImg, description:
     'Conference Hall: A fully equipped space ideal for meetings, seminars, workshops, and corporate events.' },



];

const Gallery = () => {
  return (
    <div className="gallery-page">


      <div className="gallery-banner"
          style={{ backgroundImage: `url(${require('../assets/Gallery.jpg')})` }}>

        <h1>GALLERY</h1>
      </div>
       

      {galleryItems.map((item, index) => (
        <div className="gallery-card" key={index}>
          <h2>★ ★ ★ {item.title} ★ ★ ★</h2>
          <div className='gallery-card-1' >
           <img src={item.image} alt={item.title} />
           <p>{item.description}</p>
           </div>
        </div>
      ))}

      <br></br>

        <p>Kasokoso Beach®</p>
    </div>
  );
};

export default Gallery;

