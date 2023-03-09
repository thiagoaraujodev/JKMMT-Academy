import axios from 'axios';
import { getUserLocalStorage } from '../context/AuthProvider/util';

export const api = axios.create({
	baseURL: 'http://localhost:8080',
});

api.interceptors.request.use(
	config => {
		const user = getUserLocalStorage();

		config.headers.Accept = '*/*';
		config.headers['Content-Type'] = 'application/json';
		if (user?.token) {
			config.headers.Authorization = `Bearer ${user.token}`;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	},
);
