import axios from 'axios';
require('dotenv').config();

const axiosConfig = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL + '/api'
});

export default axiosConfig