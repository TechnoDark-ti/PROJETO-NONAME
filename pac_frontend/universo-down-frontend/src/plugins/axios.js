import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Substitua com a URL do seu backend
  timeout: 5000, // Timeout padrão de 5 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
