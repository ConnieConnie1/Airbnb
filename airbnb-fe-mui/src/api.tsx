import { AccomodationModel } from './customTypse';
import { localBackendAxiosConfig } from './services/axiosConfig'

const accomodationService = {
    
    /*CRUD TestCase */
   
   
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
        }
      
    
    
     /* if (!obj) {
        obj.page = 1;
        obj.size = 1000;
      } */
   /*
      let output = {
        data: AccomodationModel[],
        /* error: false,
        errorMessage: '', 
        final: false,
      }
   
       localBackendAxiosConfig.get('/accomodations/allAccomodations', { params: obj })
        .then(response => {
          output.data = response.data as AccomodationModel;
        }).catch((err) => {
          console.log(err)
      })
       
   
      return output;
    }*/
}
export {accomodationService}

// Importa localBackendAxiosConfig, la configurazione da axiosConfig
// Definizione oggetto accomodationService, con la sua richiesta GET, usando localBackendAxiosConfig
// Le info sugli alloggi sono salvare in output data