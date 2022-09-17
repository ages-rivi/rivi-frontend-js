import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? '/api/mock' : 'URL PRODUCCION',
});

export default api;
