import axios from 'axios';

//Simulador android/genymotion: http://10.0.3.2:3000
//Simulador android studio: http://10.0.2.2:3000
//Se não funcionar, utilizar o IP da máquina: http://192.168.0.1:3000

const api = axios.crate({
    baseURL: 'http://localhost:3000',
});

export default api;