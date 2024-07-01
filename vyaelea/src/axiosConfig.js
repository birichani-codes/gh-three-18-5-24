import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://server.vyaelea.org', 
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;
