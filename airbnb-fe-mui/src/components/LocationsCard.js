import {React, useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from './Card';
import { accomodationService } from '../api';
import AccomodationCard from './Card';



const LocationsCard = ({accomodations}) => {
  //const [accomodations, setAccomodations] = useState([]); // // Crea uno stato "accommodations" come array vuoto
 
  const [allAccomodations, setAllAccomodations] = useState([]);

  useEffect(() => {
    accomodationService
      .getAllAccomodations() // una richiesta GET al backend
      .then(
        // richiesta successo
        (response) => {
          setAllAccomodations(response.data); // imposto lo stato con i dati ricevuti
        }
      )
      .catch(
        //errore nella richiesta
        (error) => {
          console.error("Error getting data: ", error); // messaggio in console
        }
      );
  }, [accomodations]);
  const showFilteredAccomodations = accomodations && accomodations.length > 0;

  // Uso useEffect per eseguire una richiesta GET tramite il mio service+metodo
  /* useEffect(() => {
    accomodationService
      .getAllAccomodations() // una richiesta GET al backend
      .then(
        // richiesta successo
        (response) => {
          setAccomodations(response.data); // imposto lo stato con i dati ricevuti
        }
      )
      .catch(
        //errore nella richiesta
        (error) => {
          console.error("Error getting data: ", error); // messaggio in console
        }
      );
  }, []); */

  // Mappo ogni annuncio in una componente card
  return (
    <Box sx={{ mx: 2 }}>
    <Grid container rowSpacing={3} columnSpacing={3}>
        {showFilteredAccomodations ? (
          accomodations.map((location) => (
            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
              <AccomodationCard location={location} />
            </Grid>
          ))
        ) : (
          allAccomodations.map((location) => (
            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
              <AccomodationCard location={location} />
            </Grid>
          ))
        )}
      </Grid>
  </Box>
  );
}

/*
const LocationsCard = () => {

    const [cards] = useState(cardLocations);
    
    if(!cardLocations.length){
        return null
    }
  return  (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
              <Card location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
*/

export default LocationsCard;