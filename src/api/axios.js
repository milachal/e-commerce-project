/*eslint-disable no-undef */
import axios from 'axios';

const authAPI = axios.create({
  baseURL: process.env.REACT_APP_ENV === 'prod' ?
    process.env.REACT_APP_PROD_API : process.env.REACT_APP_DEV_API,
  withCredentials: true,
});

export default authAPI;
