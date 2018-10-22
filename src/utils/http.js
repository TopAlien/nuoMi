import axios from 'axios'
//axios.defaults.baseURL = 'http://94.191.17.174:3000'
axios.defaults.baseURL = 'http://localhost:3000'
//添加请求拦截器
axios.interceptors.request.use( config => {
  if(window.localStorage.jwtToken){
    //请求消息头含有服务器用于验证用户代理身份的凭证
    config.headers.Authorization = window.localStorage.jwtToken;
  }
  return config;
});

// 添加响应拦截器
// axios.interceptors.response.use( response =>{
//   return response; 
// },function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// })
export default axios;

/* 
  import axios from 'axios';
  export default async function (path, opt) {
    const url = 'http://localhost:3000' + path;
    const options = Object.assign({
      method: 'GET',
    }, opt);
    try {
      const response = await axios(url, options);
      const data =  await response.data;
      return data;
    } catch (e) {
      // 错误处理
      // 提示/弹窗
    }
  }
*/