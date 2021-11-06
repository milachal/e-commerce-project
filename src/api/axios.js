/*eslint-disable no-undef */
import axios from 'axios';

const authAPI = axios.create({
  baseURL: process.env.REACT_APP_PROD_API,
  withCredentials: true,
});

export default authAPI;
