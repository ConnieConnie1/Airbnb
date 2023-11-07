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