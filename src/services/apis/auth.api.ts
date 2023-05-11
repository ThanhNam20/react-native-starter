import http from "utils/http";
import { LoginSchema, RegisterSchema } from "utils/schema";

const login = (body: LoginSchema) => {
  return http.post(`/login`, body)
}

const register = (body: RegisterSchema) => {
  return http.post(`/register`, body)
}

export const authApi = { login, register }