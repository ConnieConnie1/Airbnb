import { localBackendAxiosConfig } from './services/axiosConfig'

const accomodationService = {
    
    /*CRUD TestCase */
   
   
    getAllAccomodations: async (obj) => {
     /* if (!obj) {
        obj.page = 1;
        obj.size = 1000;
      } */
   
      let output = {
        data: null,
        /* error: false,
        errorMessage: '', */
        final: false,
      }
   
       localBackendAxiosConfig.get('/accomodations/allAccomodations', { params: obj })
        .then(response => {
          output.data = response.data;
        }).catch((err) => {
          console.log(err)
      })
       
   
      return output;
    }
}
export {accomodationService}

// Importa localBackendAxiosConfig, la configurazione da axiosConfig
// Definizione oggetto accomodationService, con la sua richiesta GET, usando localBackendAxiosConfig
// Le info sugli alloggi sono salvare in output data