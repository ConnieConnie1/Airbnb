import { AccomodationModel } from './customTypse';
import { localBackendAxiosConfig } from './services/axiosConfig';

const accomodationService = {
  /* CRUD TestCase */

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

  createReservation : async (reservationData) => {
    try {
      const response = await localBackendAxiosConfig.post ('reservations/create', reservationData);
      return{
        data: response.data,
        success: true,
      };
    } catch (error){
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