import axios from 'axios'

import { ACCESS_TOKEN_KEY } from './utils/constant'

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API
})

httpClient.interceptors.request.use((req) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY)
  // NOTE: add token
  if (token) req.headers = { Authorization: `bearer ${token}` }
  return req
})

export default httpClient
