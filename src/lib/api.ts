import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/mock'
      : // : 'URL PRODUCCION',
        'http://127.0.0.1:3000/api/mock',
});

export default api;
