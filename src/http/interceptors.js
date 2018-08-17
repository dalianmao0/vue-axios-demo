import axios from 'axios'
import qs from 'qs'

const ajax = axios.create({
  baseURL: '127.0.0.1:3000',
  timeout: 3000,
  withCredentials: false,
  headers: {'Content-Type': 'application/json;charset=UTF-8'},
  cancelToken: new cancelToken(cancel => {
    cancel = c
  })
})
// 请求拦截
ajax.interceptors.request.use(config => {
  // 在发送请求前，判断用户是否登陆
  if (config.method === 'post') {
    // 利用qs来序列化
    config.data = qs.stringify(config.data)
  }
}, error => {
  return Promise.reject(error)
})

// 响应拦截
ajax.interceptors.response.use(response => {
  // 在响应请求前
  return response
}, error => {
  return Promise.reject(error)
})

export default ajax