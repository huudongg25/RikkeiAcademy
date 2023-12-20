import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.com',
});

let activeRequests = 0;

const showLoading = () => {
  if (activeRequests === 0) {
  }
  activeRequests++;
};

const hideLoading = () => {
  activeRequests--;
  if (activeRequests === 0) {
  }
};
/*  */
api.interceptors.request.use((config) => {
  showLoading();
  return config;
}, (error) => {
  hideLoading();
  return Promise.reject(error);
});

api.interceptors.response.use((response) => {
  hideLoading();
  return response;
}, (error) => {
  hideLoading();
  return Promise.reject(error);
});

export { api };
