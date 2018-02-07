import axios, {AxiosRequestConfig} from 'axios'

axios.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => {
      config.headers['token'] = sessionStorage.getItem('token') || ''
      return config
    })
axios.interceptors.response.use((data: any): any => {
  return data
})
export default axios