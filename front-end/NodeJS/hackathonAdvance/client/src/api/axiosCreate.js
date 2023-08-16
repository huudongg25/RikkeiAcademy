import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        "Content-type": "application/json",
    },
});

export let active = 0

axiosClient.interceptors.request.use((config) => {
    active+= 1
    return config;
}, (error) => {
    return Promise.reject(error);
});

axiosClient.interceptors.response.use((response) => {
    active-=1
    return response;
}, (error) => {
    active-=1
    return Promise.reject(error);
});


export default axiosClient;
