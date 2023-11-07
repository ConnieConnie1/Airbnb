import React from 'react';

const Accomodation = ({title, image, city, region, price, rating }) => {
  return (
    <div className='accomodation__card'>
      <img src={image} alt={title} className='accomodation__image' />
      <div className='accomodation__card--all'>
        <div className='accomodation__card--left'>
          <h2>{title}</h2>
          <p>{city}</p>
          <p>{region}</p>
          <p>€ {price} a notte</p> 
        </div>
        <div className='accomodation__card--right'>
          <p>Rating: {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
