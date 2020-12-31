import axios from 'axios';

const PacientesService = axios.create({
    baseURL: 'http://localhost:3000',
});

export default PacientesService;