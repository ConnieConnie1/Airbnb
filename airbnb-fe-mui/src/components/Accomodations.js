import React, { useState, useEffect } from "react";
import Accomodation from "./Accomodation.js";
import { accomodationService } from "../../src/api.tsx";

function Accomodations() {
  const [accomodations, setAccomodations] = useState([]); // // Crea uno stato "accommodations" come array vuoto

  // Uso useEffect per eseguire una richiesta GET tramite il mio service+metodo
  useEffect(() => {
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
  }, []);

  // Mappo ogni annuncio in una componente card
  return (
    <div className="accomodation__list">
      {accomodations.length > 0 &&
        accomodations.map((accomodation) => (
          <Accomodation>
            key={accomodation.id}
            nome={accomodation.nome}
            prezzoNotte={accomodation.prezzoNotte}
            city={accomodation.city}
            region={accomodation.region}
            </Accomodation>
        ))}
    </div>
  );
}

export default Accomodations;
