import axios from 'axios'; // libreria Axios per effettuare richieste HTTP 
 
const localBackendAxiosConfig = axios.create({
    baseURL: 'http://localhost:8080',

    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    
});

// Per mostrare in console l'URL mandata

localBackendAxiosConfig.interceptors.request.use((config) => {
    console.log('URL della richiesta al backend:', config.url);
    return config;
  }, (error) => {
    return Promise.reject(error);
  });


export  {localBackendAxiosConfig};

//Importando la libreria Axios (per la gestione delle richieste HTTP)
// Definisce un oggetto di configurazione localBackendAxiosConfig
// Imporso la base base url per richieste backend locale