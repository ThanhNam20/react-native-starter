import { API_URL } from "@env";
import axios, { AxiosError, AxiosInstance } from "axios";
class Http {
  instance: AxiosInstance;
  private accessToken: string | undefined
  constructor() {
    this.instance = axios.create({
      baseURL: API_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json"
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = this.accessToken
          return config
        }
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

  }
}

const http = new Http().instance
export default http