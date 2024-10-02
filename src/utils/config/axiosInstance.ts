import axios from 'axios'
import { TOKEN } from './token'

const baseURL = import.meta.env.VITE_APP_API_URL

export const axiosInstance = axios.create({ baseURL })

axiosInstance.interceptors.request.use((config) => {
  const token = TOKEN.get()
  config.headers['Authorization'] = token ? `Bearer ${token}` : ''
  return config
})
