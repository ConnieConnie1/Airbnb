import React from "react";

const Accomodation = ({
  name,
  city,
  region,
  pricePerNight 
 
}) => {
  return (
    <div>
      <div >
        <div >
          <h2>{name}</h2>
          <p>{city}</p>
          <p>{region}</p>
          <p>€ {pricePerNight} a notte</p>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
