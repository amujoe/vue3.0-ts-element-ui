"use strict";

// import Vue from "vue";
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  baseURL: process.env.VUE_APP_API_ROOT + process.env.VUE_APP_API_VERSION,
  timeout: 10000 // 超时时间
  // withCredentials: true, // Check cross-site Access-Control
};

// 请求头
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencodedcharset=UTF-8"

const http = axios.create(config);

http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

// Plugin.install = function (Vue, options) {
//   Vue.axios = http;
//   window.axios = http;
//   Object.defineProperties(Vue.prototype, {
//     axios: {
//       get() {
//         return http;
//       },
//     },
//     $axios: {
//       get() {
//         return http;
//       },
//     },
//   });
// };

// Vue.use(Plugin);

export default http;
