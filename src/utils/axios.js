/**
 * axios setup to use mock service
 */

import axios from 'axios';
import { API_URL } from '../config';
// import { dispatch, globalAction } from '../store';
const axiosServices = axios.create({ baseURL: API_URL, timeout: 5000 });

// interceptor for http
axiosServices.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
);

export default axiosServices;
