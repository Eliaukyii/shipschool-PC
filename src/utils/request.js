import axios from 'axios'
import qs from 'qs'
import md5 from "js-md5";

//创建axios实例
const service = axios.create({
  baseURL: '/api',
  timeout: 3000,
  withCredentials: true //前端每次发送请求时就会带上cookie信息
})

service.interceptors.request.use(config => {
  let dateformat = require("dateformat-util");
  let nowDate = dateformat.format(new Date(), "MMddyyyy");

//全局添加入参

let Appid=localStorage.getItem('Appid');
let Token=localStorage.getItem('Token');

if(config.headers['Content-Type'] == 'multipart/form-data'){
  config.data.set('Appid',Appid)
  config.data.set('Token',Token)
  return config
}
if(config.method === 'post'){
  config.data=qs.stringify({
    Appid:312502,
    Token:md5(`AECBF03AC53C022E5E12${nowDate}312502`).toUpperCase(),
    ...config.data
  })
}
  return config;
}, error => {
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(response => {
  if (response.status === 200) {
    return response;
  }

}, error => {
  return Promise.reject(error);
});

export default service