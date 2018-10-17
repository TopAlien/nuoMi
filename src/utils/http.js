import axios from 'axios'
//axios.defaults.baseURL = 'http://94.191.17.174:3000'
axios.defaults.baseURL = 'http://localhost:3000'
//设置统一请求拦截
axios.interceptors.request.use(config=>{
  if(window.localStorage.jwtToken){
    config.headers.Authorization = window.localStorage.jwtToken;
  }
  return config;
});

export default axios;