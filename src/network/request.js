import axios from 'axios'
export function request(config) {
  const instancel = axios.create({
    baseURL: 'http://gou.wjw.cn/',
    // baseURL: 'http://123.207.32.32:8000',
    timeout:5000,
    method:'post'
  })
  instancel.interceptors.response.use( res => {
    return res.data
  })
  return instancel(config)
}
