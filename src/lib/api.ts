import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/mock'
      : 'URL PRODUCCION',
});

export default api;
