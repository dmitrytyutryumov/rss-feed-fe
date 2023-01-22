import axios, { AxiosResponse } from 'axios'

import { refreshTokenEndpoint } from 'shared/api'
import { getAccessToken, getRefreshToken, saveAuthTokens } from 'shared/storage'

export const ApiClient = axios.create({
  baseURL: process.env.REACT_APP_BE_URL,
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
})

ApiClient.interceptors.request.use(
  async (config) => {
    console.log(config, process.env)
    config.headers = {
      Authorization: `Bearer ${getAccessToken()}`,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

ApiClient.interceptors.response.use(
  (response) => {
    return response
  },
  async function (error) {
    const originalRequest = error.config
    if (error.response.status == 403 && !originalRequest._retry) {
      debugger
      originalRequest._retry = true
      return await updateAuthTokens()
    }
    return Promise.reject(error)
  }
)

const updateAuthTokens = async () => {
  try {
    const response: AxiosResponse<any, any> = await ApiClient.post(
      refreshTokenEndpoint,
      {
        refreshToken: getRefreshToken(),
      }
    )
    if (response.status === 200) {
      saveAuthTokens(response.data.accessToken, response.data.refreshToken)
    }
  } catch (error) {
    console.error(error)
  }
}
