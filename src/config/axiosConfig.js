import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_DATABASE_URL;

console.log(API_BASE_URL, 'log!!!!!!!')

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response && error.response.status === 401){
            console.error('Unauthorized access. Redirecting to login...');
            localStorage.removeItem('token');
        }
        return Promise.reject(error)
    }
);

export default api;