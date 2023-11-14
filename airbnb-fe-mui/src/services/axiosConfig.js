import axios from 'axios'; // libreria Axios per effettuare richieste HTTP 
 
const localBackendAxiosConfig = axios.create({
    baseURL: 'http://localhost:8080',
//Invece di coreURL
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    
});


export  {localBackendAxiosConfig};

//Importando la libreria Axios (per la gestione delle richieste HTTP)
// Definisce un oggetto di configurazione localBackendAxiosConfig
// Imporso la base base url per richieste backend locale