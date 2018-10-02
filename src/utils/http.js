import axios from 'axios'

//设置统一请求拦截
axios.interceptors.request.use(config=>{
  if(window.localStorage.jwtToken){
    config.headers.Authorization = window.localStorage.jwtToken;
  }
  return config;
});

export default axios;