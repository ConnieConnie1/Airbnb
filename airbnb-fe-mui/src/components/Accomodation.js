import React from "react";

const Accomodation = ({
  nome,
  city,
  region,
  prezzoNotte 
 
}) => {
  return (
    <div>
      <div >
        <div >
          <h2>{nome}</h2>
          <p>{city}</p>
          <p>{region}</p>
          <p>€ {prezzoNotte} a notte</p>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
