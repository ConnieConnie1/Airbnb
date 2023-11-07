import React, { useState, useEffect } from 'react';
import Accomodation from './Accomodation.js';
import { accomodationService } from "../../src/api.tsx";

function AccomodationList() {
  const [accomodations, setAccomodations] = useState([]); // // Crea uno stato "accommodations" come array vuoto

  useEffect(() => {
    accomodationService.getAllAccomodations() // una richiesta GET al tuo backend
    .then( // richiesta successo
      response => {
        setAccomodations(response.data); // imposto lo stato con i dati ricevuti
      }
    ).catch(  //errore nella richiesta
      (error) => { 
        console.error('Error getting data: ', error); // messaggio in console
      }
    );
  }, []);

  // // Mappa ogni annuncio di alloggio negli stati in un componente di card
  return (
    <div className='accomodation__list'> 
      {accomodations.map((accomodation) => ( 
        <Accomodation
          key={accomodation.id}
          title={accomodation.title} 
          image={accomodation.image}
          price={accomodation.price}
          city={accomodation.city}
          region={accomodation.region}
        />
      ))}
    </div>
  );
}

export default AccomodationList;
