import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/api'
      : // : 'URL PRODUCCION',
        'http://127.0.0.1:3000/api/mock',
});

// Quando for usar o Project, trocar para porta 4000 igual segue abaixo
// 'http://localhost:4000/api'

export default api;
