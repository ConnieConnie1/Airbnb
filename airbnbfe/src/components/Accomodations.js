import React from 'react';
import Accomodation from './Accomodation';
// importare le immagini delle case
import img1 from '../assets/img/img-1';
import img2 from '../assets/img/img-2';
import img3 from '../assets/img/img-3';
import img4 from '../assets/img/img-4';
import img5 from '../assets/img/img-5';

const Accomodations = () => {
    // Creo array
    const accomodations = [
    { title: "Texas, USA", image: img1, price: "1,541" },
    { title: "Texas, USA", image: img2, price: "1,541" },
    { title: "Texas, USA", image: img3, price: "1,541" },
    { title: "Texas, USA", image: img4, price: "1,541" },
    { title: "Texas, USA", image: img5, price: "1,541" },
   
  ];
  return (
    <div className='Accomodation__grid'>
        <div>
            {accomodations.map((accomodation) =>
            <Accomodation 
            title = {accomodation.title}
            image = {accomodation.image}
            price = {accomodation.price}
            />
            )}
        </div>
    </div>
  )
}

export default Accomodations