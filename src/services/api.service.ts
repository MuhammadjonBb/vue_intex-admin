import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('before');
  return config;
})

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log('after');
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log('error');
  return Promise.reject(error);
})
