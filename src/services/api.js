import axios from 'axios';

// Creating custom axios with base url configured to fetch data in Github's api
const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
