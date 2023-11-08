import React from "react";

const Accomodation = ({
  nome,
  /*image, */ 
  city,
  region,
  prezzoNotte 
  /*rating*/,
}) => {
  return (
    <div className="accomodation__card">
      {/* <img src={image} alt={bnome} className="accomodation__image" /> */}
      <div className="accomodation__card--all">
        <div className="accomodation__card--left">
          <h2>{nome}</h2>
          <p>{city}</p>
          <p>{region}</p>
          <p>€ {prezzoNotte} a notte</p>
        </div>
       {/*  <div className="accomodation__card--right">
          <p>Rating: {rating}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Accomodation;
