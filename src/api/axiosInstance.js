import axios from 'axios';

const local = 'localhost';
const prod = '172.18.0.2';
const port = 3002;

const baseUrl = import.meta.env.DEV ? local : prod;

const axiosInstance = axios.create({
    baseURL: `http://${baseUrl}:${port}`,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwt');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;