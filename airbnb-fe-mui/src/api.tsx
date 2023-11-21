import { AccomodationModel } from './customTypse';
import { localBackendAxiosConfig } from './services/axiosConfig';

//  esecuzione richieste asincrone al backend utilizzando Axios 
const accomodationService = {
 
// Tutti gli alloggi
  getAllAccomodations: async (obj) => {
    try {
      const response = await localBackendAxiosConfig.get('/accomodations/allAccomodations', { params: obj });
      return {
        data: response.data as AccomodationModel[],
        final: true,
      };
    } catch (error) {
      console.log(error);
      return {
        data: [],
        final: true,
      };
    }
  },


// Alloggio specifico in base a ID
  getAccomodationById: async (id) => {
    try {
      const response = await localBackendAxiosConfig.get(`/accomodations/${id}`);
      return {
        data: response.data as AccomodationModel,
        final: true,
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        final: true,
      };
    }
  },

// Creazione prenotazione
  createReservation : async (reservationData) => { //input: informazioni sulla prenotazione
    try {
      const response = await localBackendAxiosConfig.post ('reservations/create', reservationData); // richiesta backend POST
      return{ // se la richiesta ha successo
        data: response.data,
        success: true,
      };
    } catch (error){ // Se fallisce
      console.error ('Errore durante la creazione della prenotazione', error);
      return {
        success: false,
        errorMessage: error.message,
      }
    }
  }
};

export { accomodationService };


// Importa localBackendAxiosConfig, la configurazione da axiosConfig
// Definizione oggetto accomodationService, con la sua richiesta GET, usando localBackendAxiosConfig
// Le info sugli alloggi sono salvare in output data