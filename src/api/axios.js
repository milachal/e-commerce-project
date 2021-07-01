import axios from 'axios';

const authAPI = axios.create({
  baseURL: 'http://localhost:3001/api/',
  withCredentials: true,
});

export default authAPI;
